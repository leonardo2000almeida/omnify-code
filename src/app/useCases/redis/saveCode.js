const client = require("../../../infra/database/redis");

const saveCode = async (clientId, code) =>
  client.set(`user_maryKay-${clientId}`, code);

module.exports = { saveCode };
