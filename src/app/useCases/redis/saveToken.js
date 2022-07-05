const client = require("../../../infra/database/redis");
const { getClientId } = require("./getClientId");

const saveToken = async (token) => {
  const clientId = await getClientId();
  client.set(`user_maryKay-${clientId}`, token);
};

module.exports = { saveToken };
