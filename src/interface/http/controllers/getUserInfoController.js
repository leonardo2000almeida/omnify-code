const getUserDetails = require("../../../app/useCases/marykay/getUserDetails");
const { getTokenAccess } = require("../../../app/useCases/redis/getToken");

const getUserInfo = async (req, res) => {
  try {
    const { clientId } = req?.params;
    const token = await getTokenAccess(clientId);
    const user = await getUserDetails(token);

    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

module.exports = getUserInfo;
