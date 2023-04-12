module.exports = {
  filterOrders( user, status, oddzial, rental_status){
    const where = {}
    // FILTERING ORDERS OF A LOGGED IN USER WHO IS NOT AN ADMINISTRATOR
    if(user.email && user.permissions.admin === false){
      where['client.email'] =  {$regex:user.email, $options:'i'}
      console.log('user')
    }
    // EXCLUDE ORDERS WITH RETURNED STATUS FROM THE MAIN ORDERS VIEW
    if(!status){
      where.status = { $not: {$regex: rental_status.status_3} } 
    }

    if(status){
      where.status = {$regex:status, $options:'i'}
    }
    if(oddzial){
      where.localization = {$regex:oddzial, $options:'i'}
    }

    return where
  
  },

  filterProducts(oddzial){
    const where = {}
  
   
    if(oddzial){
      where.localization = Number(oddzial)
    }

    return where
  
  }
}