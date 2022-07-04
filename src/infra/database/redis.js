const Redis = require("ioredis");
const client = new Redis("redis://localhost:6379");

module.exports = client;
