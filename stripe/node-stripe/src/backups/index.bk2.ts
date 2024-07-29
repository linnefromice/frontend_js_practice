import "dotenv/config";
import Stripe from "stripe";

const { STRIPE_API_PUBLIC_KEY, STRIPE_API_SECRET_KEY } = process.env;
if (!STRIPE_API_PUBLIC_KEY || !STRIPE_API_SECRET_KEY) {
  throw new Error("Missing Stripe API keys");
}
const stripe = new Stripe(STRIPE_API_SECRET_KEY);

// linnefromparu from stripe directly
// customer: 'cus_Pu2ihR0CYmLHgi',
// linnefromparu from UI
// customer: 'cus_Pu5Hz668V0l38x'

const CUSTOMER_ID = "cus_Pu2ihR0CYmLHgi";
// https://dashboard.stripe.com/test/products
const PRICE = {
  premium: {
    month: "price_1P4HUrP7LyQtEQaSyrf3l1HF",
    year: "price_1P90jXP7LyQtEQaSEFQFZZxJ",
  },
  plus: {
    month: "price_1P3rueP7LyQtEQaS1ktNk0yg",
    year: "price_1P90jtP7LyQtEQaSYPCFYcCi",
  },
};

const executeSubscription = async (customerId: string) => {
  // Read
  const subscriptions = await stripe.subscriptions.list({
    customer: customerId,
    expand: ["data.default_payment_method"],
  });
  const subscription0 = subscriptions.data[0];
  console.dir(subscription0, { depth: null });

  // Create > POST /v1/subscriptions
  // const created = await stripe.subscriptions.create({
  //   customer: customerId,
  //   items: [
  //     {
  //       price: PRICE.plus.month,
  //     },
  //   ],
  //   expand: ["customer", "default_payment_method"],
  // });
  // console.log(JSON.stringify(created, null, 2));

  // Update > POST /v1/subscriptions/:id
  // const updated = await stripe.subscriptions.update(subscription0.id, {
  //   items: [
  //     {
  //       id: subscription0.items.data[0].id,
  //       price: PRICE.premium.month,
  //     },
  //   ],
  //   proration_behavior: "none",
  // });
  // console.log(JSON.stringify(updated, null, 2));
};

const retrieveSubscription = async (subscriptionId: string) => {
  // Read > GET /v1/subscriptions/:id
  const subscription = await stripe.subscriptions.retrieve(
    subscriptionId,
    // "sub_1P92SnP7LyQtEQaSmUlMmRVR",
    // "sub_1P7fB5P7LyQtEQaSN1mTns9Y",
    {
      expand: ["customer", "default_payment_method"],
    }
  );
  console.log(JSON.stringify(subscription, null, 2));
  console.log(subscription.items.data);
};

const executeSubscriptionSchedule = async (
  customerId: string,
  subscriptionId: string
) => {
  // create a new subscription schedule
  // const scheduled = await stripe.subscriptionSchedules.create({
  //   // customer: customerId,
  //   from_subscription: subscriptionId,
  // });
  // console.dir(scheduled, {
  //   depth: null,
  // });
  // update the subscription schedule to change the phase (new item)
  await stripe.subscriptionSchedules.update(
    "sub_sched_1PhmyHP7LyQtEQaS5DqM1OzP",
    {
      phases: [
        {
          items: [
            {
              price: PRICE.plus.month,
            },
          ],
          start_date: 1722048092,
        },
      ],
    }
  );
};

const execute = async () => {
  const customer = await stripe.customers.retrieve(CUSTOMER_ID);
  console.log(customer);

  // await executeSubscription(customer.id);
  // await retrieveSubscription("sub_1Ph0ZcP7LyQtEQaSgLDdaU94");
  await executeSubscriptionSchedule(
    customer.id,
    "sub_1Ph0ZcP7LyQtEQaSgLDdaU94"
  );
};

console.log("Starting the script");
execute()
  .then(() => console.log("Finished the script"))
  .catch(console.error);
