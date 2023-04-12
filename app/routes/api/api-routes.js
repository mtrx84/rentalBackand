const express = require('express');
const router = new express.Router();
const RentalController = require('../../controllers/api/rental-controller')

router.get('/products-localizations', RentalController.appProductsAndLocalizations)
// router.post('/:_name/:_productId', RentalController.appRentProduct)
router.post('/:_name/:_productId/najem', RentalController.appRentForm)
router.get('/umowa/:_id', RentalController.appContract)
module.exports= router 