import Stripe from "stripe";

export namespace StripePaymentMethod {
  export const list = async (stripe: Stripe, customerId: string) => {
    return await stripe.paymentMethods.list({
      customer: customerId,
      type: "card",
    });
  };
}
