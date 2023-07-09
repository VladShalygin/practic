
module.exports = (app) => {

    app.get('/getCars', async (req, res) => {
        let cars = await require('../database/getCars')()
        res.send({status: 200, cars: cars})
    })

}