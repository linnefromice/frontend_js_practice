import Stripe from "stripe";

export namespace StripeSubscriptionSchedule {
  export const createByExistingSubscription = async (
    stripe: Stripe,
    args: {
      // customerId: string;
      subscriptionId: string;
    }
  ) => {
    const { subscriptionId } = args;
    return await stripe.subscriptionSchedules.create({
      // customer: customerId,
      from_subscription: subscriptionId,
    });
  };

  export const update = async (
    stripe: Stripe,
    args: {
      scheduleId: string;
      phaseItems: Array<Stripe.SubscriptionScheduleUpdateParams.Phase.Item>;
      startDate?: number | "now";
    }
  ) => {
    const { scheduleId, phaseItems, startDate } = args;
    return await stripe.subscriptionSchedules.update(scheduleId, {
      phases: [
        {
          items: phaseItems,
          start_date: startDate,
        },
      ],
      proration_behavior: "none", // https://docs.stripe.com/api/subscription_schedules/update#update_subscription_schedule-proration_behavior
    });
  };
}

export const scheduleSubscriptionToSwitch = async (
  stripe: Stripe,
  args: {
    subscriptionId: string;
    priceId: string;
    startDate: number | "now";
  }
) => {
  const { subscriptionId, priceId, startDate } = args;
  const scheduled =
    await StripeSubscriptionSchedule.createByExistingSubscription(stripe, {
      subscriptionId,
    });

  return await StripeSubscriptionSchedule.update(stripe, {
    scheduleId: scheduled.id,
    phaseItems: [
      {
        price: priceId,
      },
    ],
    startDate,
  });
};
