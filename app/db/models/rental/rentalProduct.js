const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalProductSchema = new Schema({

 
  name: String,
  qty: Number,
  index: String,
  producer: String,
  mark: String,
  id: Number,
  cena_netto: Number,
  cena_brutto: Number,
  vat: Number,
  jm: String,
  desc: String,
  category: Number,
  logo:String,
 deposit:Number,
 technical_data:Object,
 availability:{
  type:Boolean,
  default:true},
  rentals_date:Array,
  localization:Number,
  img:Array,
  comments:String,
  link:String

  });

  // configSchema.virtual('fullNumber').get(function(){
  //   return this.complaintNum+'/'+this.year;
  // });
  
  const RentalProduct = mongoose.model('Rental_product', rentalProductSchema)
 


  module.exports = RentalProduct;

