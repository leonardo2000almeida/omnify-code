const { Router } = require("express");
const getUserInfo = require("../controllers/getUserInfoController.js");
const {
  saveCredentials,
} = require("../controllers/saveCredentialsController.js");

const main = Router();

main.get("/", saveCredentials);
main.get("/:clientId", getUserInfo);
module.exports = main;
