const challengeGenerator = require("../../../app/useCases/marykay/getCodes");

const getCodesController = async (req, res) => {
  try {
    const { challenge, verifier } = challengeGenerator();
    return res.status(200).json({ challenge, verifier });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

module.exports = getCodesController;
