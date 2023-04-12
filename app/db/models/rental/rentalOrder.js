const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalOrderSchema = new Schema({
  date: Number,
  number: String,
  product_id: String ,
  product: Object,
  rentTime:Array,
  client:{
    name:String,
    surname:String,
    pesel:String,
    street:String,
    house_number:String,
    post: String,
    city: String,
    email:String,
    phone: String,
    regulations: {
      type: Boolean,
      required:[true, "Potwierdzenie zapoznania się z regulaminem i polityką prywatności jest wymagane"]
    }
  },
  fee_netto: String,
  fee_brutto:String,
  rabat: Boolean,
  reception_date: Number,
  return:{
    active: {type:Boolean, default: false},
    gross:String,
    date: String,
    cleanCheck:  {type:Boolean},
    cautionCheck:  {type:Boolean},
    summary:String,
    cleaningFee:String,
    cautionFee:String,
    fee:String,
    suplementFee:String,
    
  },
  status:String,
  localization:String,
  user_id: String



 
  });

 
  
  const RentalOrder = mongoose.model('Rental_order', rentalOrderSchema)
 
 
  module.exports = RentalOrder;