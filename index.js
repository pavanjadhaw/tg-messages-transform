const { Airgram, Auth, prompt, toObject } = require('airgram');

// utils
const shuffle = require('./shuffle');
const shuffleString = str => shuffle(str.split('')).join('');

// config
const { stop, operator } = require('./config');

const airgram = new Airgram({
  apiId: process.env.APP_ID,
  apiHash: process.env.APP_HASH,
  databaseDirectory: './db',
  logVerbosityLevel: 2
});

airgram.use(
  new Auth({
    phoneNumber: () => prompt('Please enter your phone number:\n'),
    code: () => prompt('Please enter the secret code:\n'),
    password: () => prompt('Please enter the password:\n')
  })
);

let me;
void (async () => {
  me = toObject(await airgram.api.getMe());
})();

/**
 * on every new message
 */
airgram.on('updateNewMessage', async ({ update }, next) => {
  const { message } = update;
  const { id: messageId, chatId, replyToMessageId } = message;

  if (
    me &&
    message.senderUserId === me.id &&
    message.content._ === 'messageText' &&
    message.content.text._ === 'formattedText' &&
    message.content.text.text.startsWith(operator)
  ) {
    const messageText = message.content.text.text.substr(1);

    for (let index = 0; index <= stop; index++) {
      const t = setTimeout(() => {
        airgram.api.editMessageText({
          chatId,
          messageId,
          replyToMessageId,
          inputMessageContent: {
            _: 'inputMessageText',
            text: {
              _: 'formattedText',
              text: index === stop ? messageText : shuffleString(messageText)
            }
          }
        });

        clearTimeout(t);
      }, index * 200);
    }
  }
  return next();
});
