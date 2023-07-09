const MongoClient = require('mongodb').MongoClient

module.exports = async () => {

    const url = "mongodb://127.0.0.1:27017/";

    const dbName = 'practic';

    return new Promise(async (resolve, reject) => {
        const client = new MongoClient(url);
        client.connect;
        const db = client.db(dbName);
        resolve(db)
    })
}
