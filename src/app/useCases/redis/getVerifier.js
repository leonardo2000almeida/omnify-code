const client = require("../../../infra/database/redis");

const getVerifier = async () => await client.get("last-verifier");

module.exports = { getVerifier };
