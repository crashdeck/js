# Loggie.io

Start to log everything in just few clicks

## Features

- Easy to install on your website/app
- Log with different sverity level (info, debug, warning, error, fatal)
- Differentiate logs with channels
- More coming soon

## Installing

```bash
$ npm install loggie-io
```

## Example

### Node.js

```js
const loggie = require('loggie-io');

loggie.init({
  secretKey: "<secret-key>",
  bucketId: "<bucket-id>"
})
```
Start to push logs into your bucket

#### info

```js
loggie.info({
  message: "This is a info log"
})
```

#### debug

```js
loggie.debug({
  message: "This is a debug log"
})
```

#### warning

```js
loggie.warning({
  message: "This is a warning log"
})
```

#### error

```js
loggie.error({
  message: "This is a error log"
})
```

#### fatal

```js
loggie.fatal({
  message: "This is a fatl log"
})
```