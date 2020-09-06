const axios = require("axios");

class Loggie {
  init(config) {
    this.secretKey = config.secretKey;
    this.bucketId = config.bucketId;
    this.channel = config.channel || "";
  }

  info(payload) {
    this.pushLog({
      message: payload.message,
      type: "info",
      channel: payload.channel || this.channel || "",
    });
  }

  debug(payload) {
    this.pushLog({
      message: payload.message,
      type: "debug",
      channel: payload.channel || this.channel || "",
    });
  }

  warning(payload) {
    this.pushLog({
      message: payload.message,
      type: "warning",
      channel: payload.channel || this.channel || "",
    });
  }

  error(payload) {
    this.pushLog({
      message: payload.message,
      type: "error",
      channel: payload.channel || this.channel || "",
    });
  }

  fatal(payload) {
    this.pushLog({
      message: payload.message,
      type: "fatal",
      channel: payload.channel || this.channel || "",
    });
  }

  pushLog(payload) {
    return axios
      .post(
        `https://api.loggie.io/log-${this.bucketId}`,
        {
          message: payload.message,
          type: payload.type,
          channel: payload.channel,
        },
        {
          headers: {
            "Authorization": `${this.secretKey}`,
          },
        }
      )
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }
}

module.exports = new Loggie();
