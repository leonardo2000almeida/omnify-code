const { Router } = require("express");
const getCodesController = require("../controllers/getCodesController.js");
const getToken = require("../controllers/getTokenController.js");
const {
  saveCredentials,
} = require("../controllers/saveCredentialsController.js");

const main = Router();

main.get("/", saveCredentials);
main.get("/codes", getCodesController);
main.post("/token", getToken);
module.exports = main;
