const faker = require('faker');
const Listing = require('./index.js');
const mongoose = require('mongoose');

// helper fcn to generate random number
let getRandomInt = function(min, max, rating=false) {
  if (rating) {
    result = (Math.floor(Math.random() * (max - min + 1) + min) + Math.random()).toFixed(1);
    return result > 5 ? 5 : parseFloat(result);
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// make a bunch of listings
let listings = [];
// pick description/roomtype at random
const roomType = ['Entire place', 'Shared Room', 'Private Room', 'Hotel Room'];
const description = ['Central Location!', 'Comfy and Quaint!', 'Very quiet neighborhood', '100% Private!', 'Ultra Luxury Room', '420 Friendly Stay!', 'Cozy and Comfortable', 'Wake up to spectacular views', 'Panoramic Views', 'Spacious'];

for (let i = 0; i < 35; i++) {
  const location = faker.address.city();
  const isSuperHost = faker.random.boolean(25);
  let newListing = {
    houseId: i,
    photoUrl: `https://airbnb-fake-images.s3-us-west-1.amazonaws.com/img-${getRandomInt(1, 33)}.jpg`,
    location: location,
    description: description[Math.floor(Math.random() * description.length)],
    isSuperHost: isSuperHost,
    rating: getRandomInt(3, 5, true),
    reviewCount: getRandomInt(0, 500),
    isSaved: false,
    roomType: roomType[Math.floor(Math.random() * roomType.length)],
    numBeds: getRandomInt(0, 7),
    price: getRandomInt(20, 300)
  };
  listings.push(newListing);
}
// insert all seeded data into db
Listing.insertMany(listings);
console.log('Database seeded!');