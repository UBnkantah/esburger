const {Router} = require("express");
const stripe = require("stripe").Stripe(
  "sk_test_51NKjRZHG975uHdTHp6vWTDZP5Qai4VJv0Sr1WUko8WK57ZV0ozKsO18ssFEbLhjsufqIrOh0BNc9ywLwT3FTRUlx00RLY6Dtrj", {
  maxNetworkRetries: 0, // Disable retries
}
);

const PayRoute = Router()

PayRoute.post("/payments", async(req, res) => {
    console.log(req.body);
    console.log('hited pay')
      const line_items = req.body.cartItems.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [item.images[1].lg],
          description: item.desc,
          metadata: {
            id: item.id,
          },
        },
        unit_amount: item.price * 100,
      },
      quantity: item.cartQuantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    shipping_address_collection: {
      allowed_countries: ["US", "CA", "KE"],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0,
            currency: "usd",
          },
          display_name: "Free shipping",
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 5,
            },
            maximum: {
              unit: "business_day",
              value: 7,
            },
          },
        },
      },
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 1500,
            currency: "usd",
          },
          display_name: "Next day air",
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 1,
            },
            maximum: {
              unit: "business_day",
              value: 1,
            },
          },
        },
      },
    ],
    phone_number_collection: {
      enabled: true,
    },
    line_items,
    mode: "payment",
    success_url: "http://localhost:5174/cart-success",
    cancel_url: "http://localhost:5174/cart",
  });

  res.send({ url: session.url });
})

module.exports = PayRoute;