const { marykayAuth } = require(".");
const qs = require("qs");

const getToken = async (data) => {
  try {
    const jsonData = JSON.parse(data);
    const {code, code_verifier} = jsonData;

    const client_id =
      "3MVG9GnaLrwG9TQQPR9BSKWd2kutqyf0IfQNLLC_kHgtFgUwi.zPqlDn_6dwiHioLlVRwlWVO2uW5_w5PUgaq";

    const body = {
      grant_type: "authorization_code",
      code,
      redirect_uri: "https://marykay.dev.omnify.cx/authentication/",
      client_id,
      code_verifier,
    };

    const request = await marykayAuth("/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(body),
    });

    const { access_token } = request?.data;

    return access_token;
  } catch (err) {
    console.log(err);
  }
};

module.exports = getToken;
