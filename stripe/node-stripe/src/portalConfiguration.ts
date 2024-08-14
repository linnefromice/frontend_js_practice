import "dotenv/config";
import Stripe from "stripe";
import { StripeCustomerPortal } from "./stripe/customerPortal";

const { STRIPE_API_PUBLIC_KEY, STRIPE_API_SECRET_KEY } = process.env;
if (!STRIPE_API_PUBLIC_KEY || !STRIPE_API_SECRET_KEY) {
  throw new Error("Missing Stripe API keys");
}
const stripe = new Stripe(STRIPE_API_SECRET_KEY);
const CUSTOMER_ID = process.env.CUSTOMER_ID as string;
const CONFIG_ID = "bpc_1PnBQRP7LyQtEQaS12kOZgYi";

// bpc_1Ph4BBP7LyQtEQaSTmVKZPru <- initial
// bpc_1PhuDQP7LyQtEQaSJqQB6R9l <- example.inc
// bpc_1Pi6njP7LyQtEQaSswjunX6s <- company
// bpc_1Pi6syP7LyQtEQaS6O5y8lt1 <- company with payment_method_update.enabled = false
// bpc_1Pi6uPP7LyQtEQaSWmUjasRX <- company with payment_method_update.enabled = true
// bpc_1PnBBkP7LyQtEQaShhDU7I4L <- full-featured (subscription_cancel.mode = at_period_end)
// bpc_1PnBQRP7LyQtEQaS12kOZgYi <- full-featured (subscription_cancel.mode = immediately)

// StripeCustomerPortal.Configuration.create(stripe)
//   .then(v => {
//     console.dir(v, { depth: null });
//     console.log("Finished the script > portalConfiguration");
//   })
//   .catch(console.error);

console.log("Starting the script > portalConfiguration");
StripeCustomerPortal.session(stripe, {
  customerId: CUSTOMER_ID,
  configurationId: CONFIG_ID,
  returnUrl: "https://app.chainsight.network/",
})
  .then(v => {
    console.dir(v, { depth: null });
    console.log("Finished the script > portalConfiguration");
  })
  .catch(console.error);
