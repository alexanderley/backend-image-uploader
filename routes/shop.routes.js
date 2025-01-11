// const express = require('express');
// const frontend_URL = require('../frontendKey');
// const Stripe = require("stripe");

// const router = express.Router();

// const stripe = new Stripe(process.env.STRIPE_KEY);
// console.log('!!Stripe Secret:', process.env.STRIPE_KEY);



// router.post('/checkout', async( res, req, next) =>{
//     try{
//         const {items, successUrl, cancelUrl} = req.body;

//         if(!items || !successUrl || !cancelUrl){
//             return res.status(400).json({error: "Missing required parameters for stripe"})
//         }

//         // Create line items for Stripe Checkout Session
//         const lineItems = items.map((item) => ({
//             price_data: {
//               currency: 'usd', // Set currency
//               product_data: {
//                 name: item.name, // Name of the product
//                 description: item.description || '', // Optional description
//               },
//               unit_amount: item.price * 100, // Amount in cents
//             },
//             quantity: item.quantity,
//           }));


//         // Create a new Stripe checkout session
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ['card'], // Supported payment methods
//             line_items: lineItems,
//             mode: 'payment', // Mode of the session
//             success_url: successUrl, // Redirect URL on success
//             cancel_url: cancelUrl, // Redirect URL on cancel
//           });

//     }catch(err){
//         console.error('Error creating checkout session', err);
//         next(err);
//     }
// })


// module.exports = router;





// From Stripe Documentation


// This is your test secret API key.

const express = require('express');
const frontend_URL = require('../frontendKey');
const Stripe = require("stripe");

const router = express.Router();
const stripe = require('stripe')('sk_test_51NQVbaEepFsikkfnhedxdRwpp8GJcnsMWsPq1kxLAJHKLWQB3p6nyQW7aNffbFasBI6T90DSWWL3muc4sCKdFZgf00ys6R7fp2');

// app.use(express.static('public'));

const YOUR_DOMAIN = frontend_URL;
console.log('Frontend url:', frontend_URL)

router.post('/create-checkout-session', async (req, res) => {
  // try{
  //   const session = await stripe.checkout.sessions.create({
  //     line_items: [
  //       {
  //         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
  //         // #Todo remove the inital price of 10
  //         price: req.body.priceId || 10,
  //         quantity: req.body.quantity || 1,
  //       },
  //     ],
  //     mode: 'payment',
  //     success_url: `${YOUR_DOMAIN}?success=true`,
  //     cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  // });
  //   // res.json({ url: session.url });
  //   res.redirect(303, session.url);
  // }catch(err){
  //   console.error("Something went wrong when creating session", err)
  // }
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1QfrUcEepFsikkfnq0XWTrx6',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
});
console.log('🏓🏓🏓 Session: ', session.url);

  console.log('Response', res)

  res.redirect(303, session.url);
});

module.exports = router;