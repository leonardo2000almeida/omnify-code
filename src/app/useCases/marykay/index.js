const axios = require("axios").default;

module.exports.marykayAuth = axios.create({
  baseURL: process.env.MARYKAY_BASEURL,
});
