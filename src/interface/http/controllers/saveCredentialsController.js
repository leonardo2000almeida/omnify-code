const getToken = require("../../../app/useCases/marykay/getToken");
const { saveToken } = require("../../../app/useCases/redis/saveToken");

const saveCredentials = async (req, res) => {
  try {
    const { code } = req?.query;
    const token = await getToken(code);
    await saveToken(token);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
};

module.exports = { saveCredentials };
