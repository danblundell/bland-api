var express = require('express');
var router = express.Router();
var faker = require('faker');
faker.locale = "en_GB";

router.get('/', function(req, res, next) {

    var places = [];

    /**
     * Generate a bunch of fake data
     * TODO: replace with real data and a database call
     * */ 
    for(var i = 0; i < 100; i++) {
        places.push({
            name: faker.company.companyName(),
            tagline: faker.company.catchPhrase(),
            address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.zipCode()}` ,
            rating: `${faker.random.number(5)}.${faker.random.number(9)}`, // fake decimal rating
            website: faker.internet.url(),
            phone: faker.phone.phoneNumber(),
            latitude: faker.address.latitude(),
            longitude: faker.address.longitude()
        })
    }

  res.json(places);
});

module.exports = router;
