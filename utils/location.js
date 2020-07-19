const request = require('request')
const place = encodeURIComponent( process.argv[2])
const coordinates = function (place, callback){
    place = encodeURIComponent(place)
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1Ijoic3VtaXRjIiwiYSI6ImNrY3JlNnc1bDB6eHoycnQ2OXY4bnV0MDUifQ.mSfWLbbYI2oX5LHtmuym-g`
    request({url: url, json: true}, (err, res)=>{
        if (err){
            callback('No internet Connection', undefined)
        }
        else if(res.body.features.length == 0){
            callback('Location Not Found !! Please Try again...', undefined)
        }
        else if (res.body.features.length > 0){

            callback(undefined, res.body.features[0].center)
        }
    })
}
// coordinates('bhubaneswar', (err, res)=>{
//     console.log(res)
// })
module.exports = coordinates

