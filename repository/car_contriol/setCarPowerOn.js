const request = require('request');

module.exports = (tracker_id) => {
    return new Promise((resolve, reject) => {
        request(`http://242.sinotrack.com:90/0x0205?strUser&${tracker_id}`, { json: true }, (err, res, body) => {
            if (err) reject(err)
            console.log(`${tracker_id} is on, body = `, body);
        })
        request(`http://245.sinotrack.com:90/0x0205?strUser&${tracker_id}`, { json: true }, (err, res, body) => {
            if (err) reject(err)
            console.log(`${tracker_id} is on, body = `, body);
        })
        resolve(200)
    })

}