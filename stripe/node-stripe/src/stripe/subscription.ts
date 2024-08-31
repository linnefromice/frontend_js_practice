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
  ) => await createWithDefaultPaymentMethod(stripe, args);

  export const createWithDefaultPaymentMethod = async (
    stripe: Stripe,
    args: {
      customerId: string;
      items: Array<Stripe.SubscriptionCreateParams.Item>;
      defaultPaymentMethod?: string;
    }
  ) => {
    const { customerId, items, defaultPaymentMethod } = args;
    const now = new Date();
    const roundedNow =
      Math.round(now.getTime() / (1000 * 60 * 60 * 24)) * 60 * 60 * 24;

    return await stripe.subscriptions.create({
      customer: customerId,
      items,
      backdate_start_date: roundedNow,
      // billing_cycle_anchor: roundedNow,
      billing_cycle_anchor_config: {
        day_of_month: now.getDate(),
        hour: 0,
        minute: 0,
        second: 0,
      },
      default_payment_method: defaultPaymentMethod,
      proration_behavior: "none", // no proration
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

  export const cancelAtTheEndOfCurrentCycle = async (
    stripe: Stripe,
    args: {
      subscriptionId: string;
    }
  ) => {
    return await stripe.subscriptions.update(args.subscriptionId, {
      cancel_at_period_end: true,
    });
  };

  export const continueAfterCurrentCycle = async (
    stripe: Stripe,
    args: {
      subscriptionId: string;
    }
  ) => {
    return await stripe.subscriptions.update(args.subscriptionId, {
      cancel_at_period_end: false,
    });
  };
}
