const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalCategorySchema = new Schema({
  id: Number,
  name: String,
  subcategories:Array,
  link:String
 
  });

 
  
  const RentalCategory = mongoose.model('Rental_category', rentalCategorySchema)
 
 
  module.exports = RentalCategory;