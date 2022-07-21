const crypto = require("crypto");
const randomstring = require("randomstring");
const base64url = require("base64url");

const challengeGenerator = () => {
  const random_string = randomstring.generate(128);

  const stringToSha256 = crypto
    .createHash("sha256")
    .update(random_string)
    .digest("base64");

  return {
    challenge: base64url.fromBase64(stringToSha256),
    verifier: random_string,
  };
};

module.exports = challengeGenerator;
