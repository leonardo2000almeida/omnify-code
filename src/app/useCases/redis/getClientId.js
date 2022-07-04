const client = require("../../../infra/database/redis");

const getClientId = async () => {
  try {
    return await client.get("last-Client-Id");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getClientId };
