const router = require("express").Router();

 const stripe = require("stripe")("sk_test_51NGh3jSDzkzgjsA6yp6SkPmuCvvA6h1So7U6NgiPV3T5hhXGEqVeFQYnJjPgNk1zW8LBRbEdmTdVGTXZ2Pi4BV6W00rPrWZNPN");


router.post("/payment", (req, res) => {
  stripe.paymentIntents.create(
    {
      
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;