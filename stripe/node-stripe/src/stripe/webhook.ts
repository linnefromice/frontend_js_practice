import Stripe from "stripe";

export namespace StripeWebhook {
  export const list = async (stripe: Stripe) =>
    await stripe.webhookEndpoints.list();

  export const create = async (stripe: Stripe, args: { url: string }) => {
    const { url } = args;
    return await stripe.webhookEndpoints.create({
      url,
      enabled_events: ["setup_intent.succeeded"],
    });
  };

  export const del = async (stripe: Stripe, args: { webhookId: string }) =>
    await stripe.webhookEndpoints.del(args.webhookId);
}
