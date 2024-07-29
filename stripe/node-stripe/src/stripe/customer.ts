import Stripe from "stripe";

export namespace StripeCustomer {
  export const get = async (stripe: Stripe, args: { customerId: string }) => {
    return await stripe.customers.retrieve(args.customerId);
  };

  export const create = async (
    stripe: Stripe,
    args: {
      name: string;
      email: string;
    }
  ) => {
    const { name, email } = args;
    return await stripe.customers.create({
      name,
      email,
    });
  };
}
