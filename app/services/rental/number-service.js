const Config = require('../../db/models/config')


module.exports ={
  async setNumber(){
 const config = await Config.findById('61ae063b0855b3de3e5cac30');
 if(config.year !== (new Date().getFullYear())){
  config.rentNumber=1
  config.month = new Date().getMonth()+1
  config.year = new Date().getFullYear()

} else if(config.month !== (new Date().getMonth()+1)){
  config.rentNumber=1
  config.month = new Date().getMonth()+1
} else {
  config.rentNumber+=1

}
try {
  config.save()
} catch (error) {
  console.log(error)
}

  }
}