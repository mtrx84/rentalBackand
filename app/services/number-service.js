const Config = require('../db/models/config')


module.exports ={
  async setNumber(config_Id){
 const config = await Config.findById(config_Id);
 
try {
  if(config.year !== (new Date().getFullYear())){
    config.orderNumber=1
    config.month = new Date().getMonth()+1
    config.year = new Date().getFullYear()
  
  } else if(config.month !== (new Date().getMonth()+1)){
    config.orderNumber=1
    config.month = new Date().getMonth()+1
  } else {
    config.orderNumber+=1
  
  }
  config.save()
} catch (error) {
  console.log(error)
}

  }
}