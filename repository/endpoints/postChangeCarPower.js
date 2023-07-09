module.exports = (app) => {

    app.post('/changeCarPower', (req, res) => {
        console.log(req.body);
        if (req.body && req.body.command && req.body.tracker_id) {
            if (req.body.command === 'on') {
                console.log('on');
                require('../car_contriol/setCarPowerOn')(req.body.tracker_id)
                    .then(result => res.send({status: 200}))
                    .catch(error => res.send({status: 500, error: error}));
            } else if (req.body.command === 'off') {
                require('../car_contriol/setCarPowerOff')(req.body.tracker_id)
                    .then(result => res.send({status: 200}))
                    .catch(error => res.send({status: 500, error: error}));
            } else {
                res.send({ status: 500, error: "empty command" })
            }
        }
    })

}