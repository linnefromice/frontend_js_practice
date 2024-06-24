"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const stripe_1 = require("stripe");
const { STRIPE_API_PUBLIC_KEY, STRIPE_API_SECRET_KEY } = process.env;
if (!STRIPE_API_PUBLIC_KEY || !STRIPE_API_SECRET_KEY) {
    throw new Error('Missing Stripe API keys');
}
const stripe = new stripe_1.default(STRIPE_API_SECRET_KEY);
// linnefromparu from stripe directly
// customer: 'cus_Pu2ihR0CYmLHgi',
// linnefromparu from UI
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
    //// Create PaymentIntent
    const setupIntent = await stripe.setupIntents.create({
        automatic_payment_methods: {
            allow_redirects: 'always',
            enabled: true,
        },
        customer: 'cus_Pu2ihR0CYmLHgi',
        use_stripe_sdk: true,
        confirm: false,
    });
    console.log(setupIntent);
    console.log(await stripe.paymentMethods.list({
        customer: 'cus_Pu2ihR0CYmLHgi',
    }));
};
console.log('Starting the script');
execute()
    .then(() => console.log('Finished the script'))
    .catch(console.error);
// Customer
// id: 'cus_Pu2ihR0CYmLHgi',
// object: 'customer',
// SetupIntent
// id: 'seti_1P4Em1P7LyQtEQaSMORR8APU',
// object: 'setup_intent',
// client_secret: 'seti_1P4Em1P7LyQtEQaSMORR8APU_secret_Pu2rWHovH6A7Uh6aVU6Rp6JXlo1no8D',
//# sourceMappingURL=index.js.map