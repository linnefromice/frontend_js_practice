import "dotenv/config";
import Stripe from "stripe";

const { STRIPE_API_PUBLIC_KEY, STRIPE_API_SECRET_KEY } = process.env;
if (!STRIPE_API_PUBLIC_KEY || !STRIPE_API_SECRET_KEY) {
  throw new Error("Missing Stripe API keys");
}
const stripe = new Stripe(STRIPE_API_SECRET_KEY);
const CUSTOMER_ID = process.env.CUSTOMER_ID as string;
const CONFIG_ID = "bpc_1PhuDQP7LyQtEQaSJqQB6R9l";

export const portalConfiguration = async () => {
  return await stripe.billingPortal.configurations.create({
    business_profile: {
      headline: "Example, Inc.",
      privacy_policy_url: "https://example.com/privacy",
      terms_of_service_url: "https://example.com/terms",
    },
    features: {
      customer_update: {
        allowed_updates: ["address", "email", "name", "tax_id"],
        enabled: true,
      },
      invoice_history: {
        enabled: true,
      },
    },
  });
};

console.log("Starting the script > portalConfiguration");
// portalConfiguration()
// stripe.billingPortal.configurations.list()
stripe.billingPortal.sessions
  .create({
    customer: CUSTOMER_ID,
    configuration: CONFIG_ID,
    return_url: "https://docs.stripe.com/",
  })
  .then(v => {
    console.dir(v, { depth: null });
    console.log("Finished the script > portalConfiguration");
  })
  .catch(console.error);
