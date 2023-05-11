const fs = require('firebase-admin');

const serviceAccount = require('../service-account.json');

exports.GetDBConn = function () {

    fs.initializeApp({
        credential: fs.credential.cert(serviceAccount)
    });

    const db = fs.firestore();

    return db

}




