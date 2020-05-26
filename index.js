const axios = require("axios");

class Loggie {

  init(config) {
    this.secretKey = config.secretKey;
    this.bucketId = config.bucketId;
  }

  info(payload) {
    this.pushLog({ message: payload.message, type: "info" });
  }

  debug(payload) {
    this.pushLog({ message: payload.message, type: "debug" });
  }

  warning(payload) {
    this.pushLog({ message: payload.message, type: "warning" });
  }

  error(payload) {
    this.pushLog({ message: payload.message, type: "error" });
  }

  fatal(payload) {
    this.pushLog({ message: payload.message, type: "fatal" });
  }

  pushLog(payload) {
    return axios
      .post(
        `https://go.loggie.io/log-${this.bucketId}`,
        {
          message: payload.message,
          type: payload.type,
        },
        {
          Authorization: `${this.secretKey}`,
        }
      )
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }
}

module.exports = new Loggie;
