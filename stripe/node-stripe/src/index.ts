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

  // const subscriptions = await StripeSubscription.listFromCustomer(stripe, {
  //   customerId: customer.id,
  // });
  // console.dir(subscriptions, { depth: null });
  // const created = await StripeSubscription.create(stripe, {
  //   customerId: customer.id,
  //   items: [
  //     {
  //       price: DUMMY_SUBSCRIPTIONS.plus.prices.short,
  //     },
  //   ],
  // });
  // console.log(`Created subscription: ${created.id}`);
  // console.dir(created.items.data, { depth: null });

  // const updated = await StripeSubscription.replaceItem(stripe, {
  //   subscriptionId: created.id,
  //   replacedItemId: created.items.data[0].id,
  //   toPriceId: DUMMY_SUBSCRIPTIONS.premium.prices.short,
  // });
  // console.log(`Updated subscription: ${updated.id}`);
  // console.dir(updated.items.data, { depth: null });
};

console.log("Starting the script");
execute()
  .then(() => console.log("Finished the script"))
  .catch(console.error);
