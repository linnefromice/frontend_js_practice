import Stripe from "stripe";

export namespace StripeSubscriptionSchedule {
  export const listFromCustomer = async (
    stripe: Stripe,
    args: { customerId: string }
  ) => {
    return await stripe.subscriptionSchedules.list({
      customer: args.customerId,
    });
  };

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
      phases: Array<Stripe.SubscriptionScheduleUpdateParams.Phase>;
    }
  ) => {
    const { scheduleId, phases } = args;
    return await stripe.subscriptionSchedules.update(scheduleId, {
      phases,
      proration_behavior: "none", // https://docs.stripe.com/api/subscription_schedules/update#update_subscription_schedule-proration_behavior
    });
  };

  export const cancel = async (
    stripe: Stripe,
    args: {
      scheduleId: string;
    }
  ) => {
    return await stripe.subscriptionSchedules.cancel(args.scheduleId);
  };

  export const release = async (
    stripe: Stripe,
    args: {
      scheduleId: string;
    }
  ) => {
    return await stripe.subscriptionSchedules.release(args.scheduleId);
  };
}

export const scheduleSubscriptionToSwitch = async (
  stripe: Stripe,
  args: {
    subscriptionId: string;
    nextPriceId: string;
  }
) => {
  const { subscriptionId, nextPriceId } = args;
  const scheduled =
    await StripeSubscriptionSchedule.createByExistingSubscription(stripe, {
      subscriptionId,
    });

  // todo: check phase, phase items size
  const currentPhase = scheduled.phases[0];
  return await StripeSubscriptionSchedule.update(stripe, {
    scheduleId: scheduled.id,
    phases: [
      {
        items: [
          {
            price: currentPhase.items[0].price as string,
            quantity: currentPhase.items[0].quantity,
          },
        ],
        start_date: currentPhase.start_date,
        end_date: currentPhase.end_date,
      },
      {
        items: [
          {
            price: nextPriceId,
          },
        ],
        start_date: currentPhase.end_date,
      },
    ],
  });
};
