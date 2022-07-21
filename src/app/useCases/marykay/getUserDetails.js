const { marykayAuth } = require(".");

const getUserDetails = async (token) => {
  try {
    const request = await marykayAuth("/userinfo", {
      method: "GET",
      params: { oauth_token: token },
    });

    return request.data;
  } catch (err) {
    console.log(err);
  }
};

module.exports = getUserDetails;
