const express = require("express");
const app = express();
// This is your real test secret API key.
const stripe = require("stripe")("sk_test_51Ik5dgDrJElt9mkCxKlMoucqNOLI9xZosSkOorEYKDrofJJZcKso49Gj9PQEUlBTxwuvNdBadFgDSWKYyIF82eUr00gj94QHSS");

app.use(express.static("."));
app.use(express.json());


app.post("/create-payment-intent", async (req, res) => {
  const { total } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total*100,
    currency: "eur"
  });

  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

app.listen(4242, () => console.log('Node server listening on port 4242!'));


/*const stripe = require('stripe')('sk_test_51Ik5dgDrJElt9mkCxKlMoucqNOLI9xZosSkOorEYKDrofJJZcKso49Gj9PQEUlBTxwuvNdBadFgDSWKYyIF82eUr00gj94QHSS');
const express = require('express');
const app = express();
app.use(express.static('.'));

const YOUR_DOMAIN = 'http://localhost:3000/checkout';
//const panier = localStorage.getItem('state')
//console.log(panier)


app.post('/create-checkout-session', async (req, res) => {
  //const { total } = req.body;
  console.log(req.body)

  
  const session = await stripe.checkout.sessions.create({
    billing_address_collection: 'auto',
    shipping_address_collection: {
      allowed_countries: ['FR'],
    },
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Produit 1',
            images: ['https://source.unsplash.com/F3Dde_9thd8.jpg'],
          },
          unit_amount: 2000,
        },
        quantity: 1,
      }
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.json({ id: session.id });
});

app.listen(4242, () => console.log('Running on port 4242'));*/