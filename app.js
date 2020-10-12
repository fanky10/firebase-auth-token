var {google} = require("googleapis");
var serviceAccount = require("./google_service_account.json");
var scopes = [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/firebase.database"
];

var jwtClient = new google.auth.JWT(
    serviceAccount.client_email,
    null,
    serviceAccount.private_key,
    scopes
);

jwtClient.authorize(function(error, tokens) {
    if (error) {
      console.log("Error making request to generate access token:", error);
    } else if (tokens.access_token === null) {
      console.log("Provided service account does not have permission to generate access tokens");
    } else {
      var accessToken = tokens.access_token;
      console.log("Access token generated: ", accessToken);
    }
  });