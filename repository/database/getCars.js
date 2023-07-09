
module.exports = async () => {

    const db = await require('./connect_to_database')();
    return new Promise(async (resolve, reject) => resolve(await db.collection("cars").find().toArray()))

}