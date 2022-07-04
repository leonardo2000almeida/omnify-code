require("dotenv").config();
const { Server } = require("./src/interface/http/server.js");


new Server(null, 3000).setupRoutes().setupMiddlewares().start();
