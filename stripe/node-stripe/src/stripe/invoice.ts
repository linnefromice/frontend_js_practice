import Stripe from "stripe";

export namespace StripeInvoice {
  export const create = async (
    stripe: Stripe,
    args: {
      customer: string;
      amount: number;
    }
  ) => {
    const { customer, amount } = args;
    const invoice = await stripe.invoices.create({
      customer,
      collection_method: "charge_automatically",
    });
    await stripe.invoiceItems.create({
      customer,
      amount,
      description: "Settlement of credit shortfalls",
      invoice: invoice.id,
    });
    // await stripe.invoices.finalizeInvoice(invoice.id, {
    //   auto_advance: true,
    // });
    await stripe.invoices.pay(invoice.id);
  };

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
      billing_cycle_anchor: "now",
      // billing_cycle_anchor: 1724457600,
    },
    // temp: item to be purchased to add.
    invoice_items: [
      {
        currency: "usd",
        amount: 25000,
        // description: "Settlement of credit shortfalls",
      },
    ],
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
