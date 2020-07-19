const request = require('request')
const weather = function(coordinates, callback){
    const url = `http://api.weatherstack.com/current?access_key=2c94d966b513a0e358bff2c9c7fe5a5b&query=${coordinates[0]},${coordinates[1]}`
    request({url: url, json: true}, (err, res)=>{
        if (err){
            console.log(err)
            callback('No Internet Connection', undefined)
        }
        else if(!res.body.current){
            callback('Unable To Find !! Please Try Again...', undefined)
        }
        else{
            callback(undefined, res.body)
        }
    })
}
module.exports = weather