import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/index.js";

export class Server {
  constructor(app, PORT) {
    this.app = app || express();
    this.port = PORT || 3000;
  }

  setupMiddlewares = () =>
    this.app.use(
      express.json(),
      express.urlencoded({ extended: true }),
      cors(),
      helmet(),
      morgan("tiny")
    );

  setupRoutes = () => routes.map((route) => this.app.use);

  start = () =>
    this.app.listen(this.port, () =>
      console.log(`Server is ready to recieve connections on port ${this.port}`)
    );
}
