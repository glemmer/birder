const axios = require('axios');

var requestAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyD-LM717FiPawYbwuPowR8KoyEDT3LkWSQ&address=${encodedAddress}`;

    axios.get(geocodeUrl)
    .then((response) => {
        //Get address data from geocode
        if (response.data.status === 'OK') {
            var address  = response.data.results[0].formatted_address;
            var latitude = response.data.results[0].geometry.location.lat;
            var longitude = response.data.results[0].geometry.location.lng;

            //Async callback function 
            callback ({
                address,
                latitude,
                longitude
            });
        } else {
            callback({
                address: `N/A`    
            })
        }
    })
    .catch((err) => {
        callback({
            code: err.code,
            reason: `Unable to connect to Google servers`
        });
    });
    
}

module.exports.requestAddress = requestAddress;