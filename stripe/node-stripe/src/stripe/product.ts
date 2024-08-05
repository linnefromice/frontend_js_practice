import Stripe from "stripe";

export namespace StripeProduct {
  export const list = async (stripe: Stripe) => await stripe.products.list();
}
