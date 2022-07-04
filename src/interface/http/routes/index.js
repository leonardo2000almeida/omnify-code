const { Router } = require("express");
const {
  saveCredentials,
} = require("../controllers/saveCredentialsController.js");

const main = Router();

main.get("/", saveCredentials);
module.exports = main;
