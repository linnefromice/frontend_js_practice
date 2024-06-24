import "dotenv/config";
import Stripe from "stripe";

const { STRIPE_API_PUBLIC_KEY, STRIPE_API_SECRET_KEY } = process.env;
if (!STRIPE_API_PUBLIC_KEY || !STRIPE_API_SECRET_KEY) {
  throw new Error("Missing Stripe API keys");
}
const stripe = new Stripe(STRIPE_API_SECRET_KEY);

// linnefromparu from stripe directly
// customer: 'cus_Pu2ihR0CYmLHgi',
// linnefromparu from UI
// customer: 'cus_Pu5Hz668V0l38x'

const execute = async () => {
  //// Create Customer
  // const customer = await stripe.customers.create({
  //   name: 'linnefromparu',
  //   email: 'linnefromparu@gmail.com',
  // });
  // console.log(customer);
  //// Get Customer
  // const customer = await stripe.customers.retrieve('cus_Pu2ihR0CYmLHgi');
  // console.log(customer);
  // Create PaymentIntent
  // const setupIntent = await stripe.setupIntents.create({
  //   automatic_payment_methods: {
  //     allow_redirects: "always",
  //     enabled: true,
  //   },
  //   customer: "cus_Pu5Hz668V0l38x",
  //   use_stripe_sdk: true,
  //   confirm: false,
  //   payment_method_types: ["card", ""],
  // });
  // console.log(setupIntent);
  // GET /v1/customers/:id
  // const customer = await stripe.customers.retrieve("cus_Pu5Hz668V0l38x");
  // console.log(JSON.stringify(customer, null, 2));
  // await stripe.customers.update("cus_Pu5Hz668V0l38x", {
  //   invoice_settings: {
  //     default_payment_method: "pm_1P4JACP7LyQtEQaSu8lPRBeN",
  //   },
  // });
  // GET /v1/customers/:id/payment_methods
  // const res = await stripe.paymentMethods.list({
  //   customer: "cus_Pu5Hz668V0l38x",
  // });
  // console.log(JSON.stringify(res, null, 2));
  // GET /v1/subscriptions/:id
  const subscription = await stripe.subscriptions.retrieve(
    "sub_1P92SnP7LyQtEQaSmUlMmRVR",
    // "sub_1P7fB5P7LyQtEQaSN1mTns9Y",
    {
      expand: ["customer", "default_payment_method"],
    }
  );
  console.log(JSON.stringify(subscription, null, 2));
  // console.log(subscription.items.data);

  // minimum
  // const paymentIntent = await stripe.paymentIntents.create({
  //   customer: "cus_Pu2ihR0CYmLHgi",
  //   description: "Upgrade Subscription: Plus -> Premium",
  //   amount: 20000 - 10000,
  //   currency: "usd",
  //   confirm: true,
  //   return_url: "https://example.com/success",
  //   payment_method: "pm_1P4HjPP7LyQtEQaSO0iY0VRK",
  //   // automatic_payment_methods: {
  //   //   allow_redirects: "always",
  //   //   enabled: true,
  //   // },
  // });
  // console.log(JSON.stringify(paymentIntent, null, 2));
};

console.log("Starting the script");
execute()
  .then(() => console.log("Finished the script"))
  .catch(console.error);

// Customer
// id: 'cus_Pu2ihR0CYmLHgi',
// object: 'customer',

// SetupIntent
// id: 'seti_1P4Em1P7LyQtEQaSMORR8APU',
// object: 'setup_intent',
// client_secret: 'seti_1P4Em1P7LyQtEQaSMORR8APU_secret_Pu2rWHovH6A7Uh6aVU6Rp6JXlo1no8D',
