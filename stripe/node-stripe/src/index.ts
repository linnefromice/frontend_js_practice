import "dotenv/config";
import Stripe from "stripe";
import { StripeCustomer } from "./stripe/customer";

const { STRIPE_API_PUBLIC_KEY, STRIPE_API_SECRET_KEY } = process.env;
if (!STRIPE_API_PUBLIC_KEY || !STRIPE_API_SECRET_KEY) {
  throw new Error("Missing Stripe API keys");
}
const stripe = new Stripe(STRIPE_API_SECRET_KEY);
const CUSTOMER_ID = process.env.CUSTOMER_ID as string;

const execute = async () => {
  const customer = await StripeCustomer.get(stripe, {
    customerId: CUSTOMER_ID,
  });
  console.dir(customer, { depth: null });
};

console.log("Starting the script");
execute()
  .then(() => console.log("Finished the script"))
  .catch(console.error);
