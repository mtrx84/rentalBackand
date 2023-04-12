const RentalProduct = require('../../db/models/rental/rentalProduct')
const RentalOrder = require('../../db/models/rental/rentalOrder')
const RentalLocalization = require('../../db/models/rental/rentalLocalization')
const Config = require('../../db/models/config')
const {getFee} = require('../../services/rental/getFee-service')
const {rentMessage} = require('../../services/rental/message-service')
const {setNumber}= require('../../services/rental/number-service')

class RentalController{

  async appProductsAndLocalizations(req,res){
    console.log('zapytanie')
    const products = await RentalProduct.find()
    const localizations = await RentalLocalization.find()
    res.json({"products":products, "localizations": localizations})
  }

  async appRentForm(req, res){
    const {dates, product, dataForm}= req.body
    const rentTime = dates 
    const rentProduct = product
    const productData = await RentalProduct.findById(rentProduct._id)
    const config = await Config.findById('61ae063b0855b3de3e5cac30')
    const fee = getFee(rentTime, rentProduct)
    let localization = '';
    if(product.localization === 1){
      localization = "Łańcut"
    } else if(product.localization === 2){
      localization = "Żabno"
    } else if(product.localization === 3){
      localization = "Albigowa"
    }
    const order = new RentalOrder({
      number: config.fullRentNumber,
      date: new Date().getTime(),
      localization: localization,
      // status: res.locals.rental_status.status_1,
      // .toISOString().split('T')[0]
      product_id: rentProduct._id,
      rentTime: rentTime,
      product: productData,
      client: {
        name: dataForm.name,
        surname: dataForm.surname,
        pesel: dataForm.pesel,
        street: dataForm.street,
        house_number: dataForm.houseNumber,
        post: dataForm.post,
        city: dataForm.city,
        email: dataForm.email,
        phone: dataForm.phone,
        regulations: dataForm.regulations === "on" || true ? true : undefined
      },
      fee_netto: fee.rentFeeNetto,
      fee_brutto: fee.rentFeeBrutto,
      rabat: fee.rabat
    })
    rentTime.forEach((el) => {
      productData.rentals_date.push(el)
    });

    try {
      const _id = await order.save().then(saveDoc => saveDoc._id)
      await productData.save()
      await setNumber("61ae063b0855b3de3e5cac30") 
      
       rentMessage(order)  
       res.status(200).json({
        success:true,
        redirectUrl: '/umowa',
        data:req.body,
        orderId: _id
      })
    } catch (error) {
      console.log(error)
    }
  };

 async appContract(req,res){
    const{_id} = req.params
    const order = await RentalOrder.find({_id})
    res.status(200).json({
      success:true,
      order: JSON.stringify(order)
    })
  };
}

module.exports = new RentalController()