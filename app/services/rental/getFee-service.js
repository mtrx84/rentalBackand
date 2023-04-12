
module.exports={
   getFee(rentDate, product){
    const fee = {
      rentFeeNetto:0,
      rentFeeBrutto:0,
      rabat: false
    } 
    if(rentDate.length>=2){
      fee.rentFeeNetto= (product.cena_netto * rentDate.length*0.9).toFixed(2)
      fee.rentFeeBrutto= (product.cena_brutto * rentDate.length*0.9).toFixed(2)
      if(fee.rabat === false){
        fee.rabat =true
      }
    } else{
      fee.rentFeeNetto= (product.cena_netto * rentDate.length).toFixed(2)
      fee.rentFeeBrutto= (product.cena_brutto * rentDate.length).toFixed(2)
      if(fee.rabat === true){ 
        fee.rabat=false
      }
    }
    return fee
  }
}