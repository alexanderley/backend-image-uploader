const express = require('express');
const frontend_URL = require('../frontendKey');
const Stripe = require("stripe");

const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_KEY);
console.log('!!!!!!!!!!!!!!Stripe Secret:', process.env.STRIPE_KEY);

router.post('/checkout', async( res, req, next) =>{
    
})


module.exports = router;