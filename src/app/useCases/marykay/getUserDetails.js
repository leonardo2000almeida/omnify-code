const axios = require("axios").default;

const getUserDetails = async (token) => {
  try {
    const request = await axios(
      "https://amr1uat-mkamr-marykayintouch.cs43.force.com/br/services/oauth2/userinfo",
      {
        method: "GET",
        params: { oauth_token: token },
      }
    );

    return request.data;
  } catch (err) {
    console.log(err);
  }
};

module.exports = getUserDetails;
