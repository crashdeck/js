# Crashdeck.io

Start to log everything in just few clicks

## Features

- Easy to install on your website/app
- Log with different sverity level (info, debug, warning, error, fatal)
- Differentiate logs with channels
- More coming soon

## Installing

```bash
$ npm i @crashdeck/crashdeck
```

## Example

### Initialization

```js
import Crashdeck from "crashdeck";

Crashdeck.init({
  secretKey: "<secret-key>",
  bucketId: "<bucket-id>",
});
```

Crashdeck do not collect the errors automatically. If you want to enable this feature, use the following code:

```js
Crashdeck.autoCollectErrors(true);
```

Start to push logs into your bucket

#### info

```js
Crashdeck.info({
  message: "This is a info log",
});
```

#### debug

```js
Crashdeck.debug({
  message: "This is a debug log",
});
```

#### warning

```js
Crashdeck.warning({
  message: "This is a warning log",
});
```

#### error

```js
Crashdeck.error({
  message: "This is a error log",
});
```

#### fatal

```js
Crashdeck.fatal({
  message: "This is a fatl log",
});
```
