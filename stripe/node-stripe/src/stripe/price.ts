import Stripe from "stripe";

export namespace StripePrice {
  export const list = async (stripe: Stripe) => await stripe.prices.list();
}
