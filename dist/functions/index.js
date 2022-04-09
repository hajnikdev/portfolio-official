const functions = require("firebase-functions");
const mainjsFile = require(__dirname + "/server/main");

exports.ngssr = functions.https.onRequest(mainjsFile.app());
