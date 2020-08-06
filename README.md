# Crashdeck.io

Start to log everything in just few clicks

## Features

- Easy to install on your website/app
- Log with different sverity level (info, debug, warning, error, fatal)
- Differentiate logs with channels
- More coming soon

## Installing

```bash
$ npm install crashdeck
```

## Example

### Node.js

```js
const crashdeck = require('crashdeck');

crashdeck.init({
  secretKey: "<secret-key>",
  bucketId: "<bucket-id>"
})
```
Start to push logs into your bucket

#### info

```js
crashdeck.info({
  message: "This is a info log"
})
```

#### debug

```js
crashdeck.debug({
  message: "This is a debug log"
})
```

#### warning

```js
crashdeck.warning({
  message: "This is a warning log"
})
```

#### error

```js
crashdeck.error({
  message: "This is a error log"
})
```

#### fatal

```js
crashdeck.fatal({
  message: "This is a fatl log"
})
```