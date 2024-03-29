const request = require('request')

const forecast = (longitutde, latitude, callback) => {
    const url = `https://api.darksky.net/forecast/d9d3f6a958ec1a622305dfa250cac38c/${encodeURIComponent(longitutde)},${encodeURIComponent(latitude)}?units=si`

    request({
        url,
        json: true
    }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather server!', undefined)
        } else if (body.error) {
            callback(body.error, undefined)
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees. There is ${body.currently.precipProbability}% chance of rain`)

        }
    })
}

module.exports = forecast