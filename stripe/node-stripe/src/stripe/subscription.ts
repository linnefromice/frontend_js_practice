import Stripe from "stripe";

export namespace StripeSubscription {
  export const retrieve = async (
    stripe: Stripe,
    args: { subscriptionId: string }
  ) => {
    return await stripe.subscriptions.retrieve(args.subscriptionId, {
      expand: ["customer", "default_payment_method"],
    });
  };

  export const listFromCustomer = async (
    stripe: Stripe,
    args: { customerId: string }
  ) => {
    return await stripe.subscriptions.list({
      customer: args.customerId,
      expand: ["data.default_payment_method"],
    });
  };

  export const create = async (
    stripe: Stripe,
    args: {
      customerId: string;
      items: Array<Stripe.SubscriptionCreateParams.Item>;
    }
  ) => {
    const { customerId, items } = args;
    return await stripe.subscriptions.create({
      customer: customerId,
      items,
      expand: ["customer", "default_payment_method"],
    });
  };

  export const replaceItem = async (
    stripe: Stripe,
    args: {
      subscriptionId: string;
      replacedItemId: string;
      toPriceId: string;
    }
  ) => {
    const { subscriptionId, replacedItemId, toPriceId } = args;
    return await stripe.subscriptions.update(subscriptionId, {
      items: [
        {
          id: replacedItemId,
          price: toPriceId,
        },
      ],
      proration_behavior: "none", // no proration
    });
  };
}
