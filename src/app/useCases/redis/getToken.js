const client = require("../../../infra/database/redis");

const getTokenAccess = async (clientId) =>
  await client.get(`user_maryKay-${clientId}`);

module.exports = { getTokenAccess };
