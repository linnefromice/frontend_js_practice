import "dotenv/config";
import Stripe from "stripe";
import { SUBSCRIPTIONS } from "./constants";

const { STRIPE_API_PUBLIC_KEY, STRIPE_API_SECRET_KEY } = process.env;
if (!STRIPE_API_PUBLIC_KEY || !STRIPE_API_SECRET_KEY) {
  throw new Error("Missing Stripe API keys");
}
const stripe = new Stripe(STRIPE_API_SECRET_KEY);

const execute = async () => {
  // about the plan before the change
  const invoice1 = await stripe.invoices.createPreview({
    subscription: "sub_1PnE20P7LyQtEQaSnemu8AmF", // current subscription id
    subscription_details: {
      cancel_now: true,
    },
  });
  console.log(`> about the plan before the change`);
  console.dir(invoice1, { depth: null });

  // about the plan after the change
  const today =
    Math.floor(new Date().getTime() / 1000 / 60 / 60 / 24) * 24 * 60 * 60;
  console.log(today);
  const invoice2 = await stripe.invoices.createPreview({
    subscription_details: {
      items: [
        {
          price: SUBSCRIPTIONS.premium.prices.short,
        },
      ],
      start_date: today,
      billing_cycle_anchor: today,
    },
  });
  console.log(`> about the plan after the change`);
  console.dir(invoice2, { depth: null });
};

console.log("Starting the script");
execute().then(() => console.log("Finished the script"));
