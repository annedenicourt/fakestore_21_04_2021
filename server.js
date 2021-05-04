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