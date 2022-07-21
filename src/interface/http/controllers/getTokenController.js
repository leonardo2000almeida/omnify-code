const getTokenMk = require("../../../app/useCases/marykay/getToken");
const getUserDetails = require("../../../app/useCases/marykay/getUserDetails");

const getToken = async (req, res) => {
  try {
    const token = await getTokenMk(req.body);
    const user = await getUserDetails(token);
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};

module.exports = getToken;
