const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes/main.routes.js");

class Server {
  constructor(app, PORT) {
    this.app = app || express();
    this.port = PORT || 3000;
  }

  setupMiddlewares = () => {
    this.app.use(
      express.text(),
      express.json(),
      express.urlencoded({ extended: true }),
      cors(),
      helmet(),
      morgan("tiny")
    );

    return new Server(this.app);
  };

  setupRoutes = () => {
    this.app.use(routes);
    return new Server(this.app);
  };

  start = async () => {
    this.app.listen(this.port, () =>
      console.log(`Server is ready to recieve connections on port ${this.port}`)
    );
  };
}

module.exports = { Server };
