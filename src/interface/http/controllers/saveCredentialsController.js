const getToken = require("../../../app/useCases/marykay/getToken");

const saveCredentials = async (req, res) => {
  try {
    const { code } = req?.query;
    const token = await getToken(code);

  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
};

module.exports = { saveCredentials };
