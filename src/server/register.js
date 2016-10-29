require("babel-core/register");
const server = require("./server.js");

module.exports = {
  app: function () {
    const app = server.app()

    return app
  }
}