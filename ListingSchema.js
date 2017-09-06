/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
  /* your code here */
  code: 	{ type: String, required: true },
  name: 	{ type: String, required: true },
  
  coordinates: {
    latitude: 		Number,
    longitude: 		Number
  },
  address:		String,
 // entryIndex:	{type: Number, required: true, unique: true},
  created_at: 	Date,
  updated_at: 	Date
  
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {
  /* your code here */
  var currentDate = new Date();
  
  //chages the updated_at field to the current date
  this.updated_at = currentDate;
  
  //if no created_at time has been made, add the field
  if(!this.created_at)
  	this.created_at = currentDate;
  	
  	next();
});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
