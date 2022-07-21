require("dotenv").config();
const { Server } = require("./src/interface/http/server.js");

new Server(null, process.env.PORT).setupMiddlewares().setupRoutes().start();
