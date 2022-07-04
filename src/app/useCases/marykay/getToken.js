const { getClientId } = require("../redis/getClientId");
const { getVerifier } = require("../redis/getVerifier");

const axios = require("axios").default;

const getToken = async (code) => {
  try {
    const client_id = await getClientId();
    const code_verifier = await getVerifier();

    const request = await axios(
      "https://amr1uat-mkamr-marykayintouch.cs43.force.com/br/services/oauth2/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: `grant_type=authorization_code&code=${code}&redirect_uri=https://marykay.dev.omnify.cx/authentication/&client_id=${client_id}&code_verifier=${code_verifier}`,
      }
    );
    const { access_token } = request?.data;

    return access_token;
  } catch (err) {
    console.log(err.response);
  }
};

module.exports = getToken;
