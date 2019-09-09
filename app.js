const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if (!location) {
    console.log('Please provide a location')
} else {


    geocode(location, (error, {latitude, longitude, location}) => {
        if (error) {
            console.log(error)
        }

        forecast(latitude, longitude, (error, forecastdata) => {
            if (error) {
                console.log(error)
            }
            console.log(location)
            console.log(forecastdata)
        })

    })
}