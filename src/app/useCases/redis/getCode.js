const client = require("../../../infra/database/redis");

const getCode = async (clientId) =>
  await client.get(`user_maryKay-${clientId}`);

module.exports = { getCode };
