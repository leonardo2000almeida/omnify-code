const getToken = require("../../../app/useCases/marykay/getToken");
const { getClientId } = require("../../../app/useCases/redis/getClientId");
const { getVerifier } = require("../../../app/useCases/redis/getVerifier");
const { saveCode } = require("../../../app/useCases/redis/saveCode");

const saveCredentials = async (req, res) => {
  try {
    const { code } = req?.query;
    await getToken(code);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
};

module.exports = { saveCredentials };
