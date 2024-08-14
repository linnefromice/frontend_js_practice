import Stripe from "stripe";

export namespace StripeInvoice {
  export const createPreview = async (
    stripe: Stripe,
    params: Stripe.InvoiceCreatePreviewParams
  ) => {
    return await stripe.invoices.createPreview(params);
  };
}

export const previewInvoiceForUpgradeImmediately = async (
  stripe: Stripe,
  customer: string,
  subscription: {
    id: string;
    items: Stripe.InvoiceCreatePreviewParams.SubscriptionDetails.Item[];
    proration_date?: number;
  }
) => {
  const { id, items, proration_date } = subscription;
  return await StripeInvoice.createPreview(stripe, {
    customer,
    subscription: id,
    subscription_details: {
      items,
      proration_date,
    },
  });
};

export const previewInvoiceForSubscriptionSchedule = async (
  stripe: Stripe,
  customer: string,
  subscriptionSchedule: string
) => {
  return await StripeInvoice.createPreview(stripe, {
    customer,
    schedule: subscriptionSchedule,
  });
};
