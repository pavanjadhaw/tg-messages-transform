#### demo

![demo](https://media.giphy.com/media/VzkCMjptIwX1jUxX3c/source.gif)

&nbsp;

#### requirements

1. Build TDLib library according the [instruction](https://github.com/tdlib/td#building).
2. Install [node-gyp](https://github.com/nodejs/node-gyp#installation)

#### installation

```sh
git clone https://github.com/pavanjadhaw/tg-messages-transform
cd tg-messages-transform
yarn install
cp .example.env .env
yarn start
```

Note: You'll need to get app_id and app_hash from [telegram](https://core.telegram.org/tdlib/getting-started) and replace them in `.env`

#### usage

Start the server

```sh
yarn start
```

Now any message that starts with `"#"`(operator defined in config.js) which you send will be shuffled

&nbsp;

#### license

MIT © [Pavan Jadhaw](https://github.com/pavanjadhaw)
