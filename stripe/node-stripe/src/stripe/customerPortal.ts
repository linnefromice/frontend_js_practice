import Stripe from "stripe";
import { SUBSCRIPTIONS } from "../constants";

const { STRIPE_CUSTOMER_PORTAL_PP_URL, STRIPE_CUSTOMER_PORTAL_TOS_URL } =
  process.env;

export namespace StripeCustomerPortal {
  export const session = async (
    stripe: Stripe,
    args: {
      customerId: string;
      configurationId: string;
      returnUrl?: string;
    }
  ) => {
    const { customerId, configurationId, returnUrl } = args;
    return await stripe.billingPortal.sessions.create({
      customer: customerId,
      configuration: configurationId,
      return_url: returnUrl || "https://docs.stripe.com/",
    });
  };

  export namespace Configuration {
    export const list = async (stripe: Stripe) =>
      await stripe.billingPortal.configurations.list();

    export const retrieve = async (
      stripe: Stripe,
      args: { configId: string }
    ) => await stripe.billingPortal.configurations.retrieve(args.configId);

    export const create = async (stripe: Stripe) => {
      const { plus, premium } = SUBSCRIPTIONS;
      return await stripe.billingPortal.configurations.create({
        business_profile: {
          headline: "Manage your Chainsight billing settings",
          privacy_policy_url: STRIPE_CUSTOMER_PORTAL_PP_URL,
          terms_of_service_url: STRIPE_CUSTOMER_PORTAL_TOS_URL,
        },
        features: {
          customer_update: {
            allowed_updates: ["address", "email", "name", "tax_id"],
            enabled: true,
          },
          payment_method_update: {
            enabled: true,
          },
          invoice_history: {
            enabled: true,
          },
          subscription_update: {
            enabled: true,
            default_allowed_updates: ["price"],
            products: [
              {
                product: plus.id,
                prices: [plus.prices.short, plus.prices.long],
              },
              {
                product: premium.id,
                prices: [premium.prices.short, premium.prices.long],
              },
            ],
            proration_behavior: "create_prorations",
          },
          subscription_cancel: {
            enabled: true,
            mode: "immediately",
          },
        },
      });
    };
  }
}
