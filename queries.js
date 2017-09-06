/* Fill out these functions using Mongoose queries*/
var  Listing = require('./ListingSchema.js'),
	mongoose = require('mongoose'), 
	config = require('./config');

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.findOne({name: 'Library West'}, function(err, listing) {
   	if(err) throw err;
   
   	console.log(listing);
   });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   Listing.findOne({code: 'CABL'}, function(err, rmItem) {
   
   	console.log('item removed',rmItem);
   	rmItem.remove(function(err){if (err) throw err});
   
   });
   
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   Listing.findOneAndUpdate({code: 'PHL'}, {address: "my house"}, function(err, updtItem) {
   	
   if (err) throw err;
   console.log(updtItem);
   
   });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   Listing.find({},function(err, listing) {
   
   	if (err) throw err;
   	console.log(listing);
   
   });
};

mongoose.connect(config.db.uri,{userMongoClient: true});

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
