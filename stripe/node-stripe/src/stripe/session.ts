import Stripe from "stripe";

export namespace StripeSession {
  export const create = async (
    stripe: Stripe,
    customerId: string,
    returnUrl: string,
    items: Stripe.Checkout.SessionCreateParams.LineItem[]
  ) => {
    return await stripe.checkout.sessions.create({
      customer: customerId,
      line_items: items,
      mode: "subscription",
      success_url: returnUrl,
      cancel_url: returnUrl,
      payment_method_types: ["card"],
      saved_payment_method_options: {
        payment_method_save: "enabled",
      },
      locale: "en",
    });
  };
}
