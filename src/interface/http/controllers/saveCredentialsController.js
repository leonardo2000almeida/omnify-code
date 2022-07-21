const saveCredentials = async (req, res) => {
  try {
    const { code } = req?.query;
    res.redirect(`${req.hostname}/?code=${code}`);
  } catch (err) {
    return res.sendStatus(500);
  }
};

module.exports = { saveCredentials };
