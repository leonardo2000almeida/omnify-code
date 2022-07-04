const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes/index.js");

class Server {
  constructor(app, PORT) {
    this.app = app || express();
    this.port = PORT || 3000;
  }

  setupMiddlewares = () =>
    new Server(
      this.app.use(
        express.json(),
        express.urlencoded({ extended: true }),
        cors(),
        helmet(),
        morgan("tiny")
      )
    );

  setupRoutes = () => new Server(this.app.use(routes));

  start = async () => {
    this.app.listen(this.port, () =>
      console.log(`Server is ready to recieve connections on port ${this.port}`)
    );
  };
}

module.exports = { Server };
