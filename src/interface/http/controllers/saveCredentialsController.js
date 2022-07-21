const saveCredentials = async (req, res) => {
  try {
    const { code } = req?.query;
    console.log(req.hostname)
    res.redirect(
      `https://amr1uat-mkamr-marykayintouch.cs43.force.com/br/s/?code=${code}`
    );
  } catch (err) {
    return res.sendStatus(500);
  }
};

module.exports = { saveCredentials };
