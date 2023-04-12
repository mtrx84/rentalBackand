const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalLocalizationSchema = new Schema({
  
contact:{
  miasto: String,
  ulica: String,
  poczta: String,
  phone: String,
  email: String
},
id:Number,
name:String,
products:Array,
link:String
 
  });

 
  
  const RentalLocalization = mongoose.model('Rental_localization', rentalLocalizationSchema)
 
 
  module.exports = RentalLocalization;