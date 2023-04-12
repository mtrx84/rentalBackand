const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const configSchema = new Schema({
  
   orderNumber: Number,
  year: Number,
  month:Number,
  
  });

  configSchema.virtual('fullRentNumber').get(function(){
    return this.orderNumber+'/'+this.month+'/'+this.year;
  });
  configSchema.virtual('b2bFullOrderNumber').get(function(){
    return this.orderNumber+'-'+this.month+'-'+this.year;
  });
  
  const Config = mongoose.model('Config', configSchema)
  

  module.exports = Config;