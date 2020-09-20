const axios = require("axios");

class Loggie {
  init(config) {
    this.secretKey = config.secretKey;
    this.bucketId = config.bucketId;
    this.channel = config.channel || "";
  }

  // auto collect errors
  autoCollectErrors(bool) {
    if (bool) {
      this.isAutoCollectErrorsEnabled = true;
      const vm = this;

      window.addEventListener("error", function (event) {
        const message = event.message || "Message not found";
        const fileName = event.filename || "Unable to get file name";
        const lineno = event.lineno || "Unable to get line number";
        const colno = event.colno || "Unable to get column number";

        const crashdeckErrorMessage = `${message} in ${fileName} at line number: ${lineno} and column: ${colno}`;

        vm.error({ message: crashdeckErrorMessage });
      });
    }
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
