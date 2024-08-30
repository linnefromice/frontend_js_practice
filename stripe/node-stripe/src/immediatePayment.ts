import "dotenv/config";
import Stripe from "stripe";

const { STRIPE_API_PUBLIC_KEY, STRIPE_API_SECRET_KEY } = process.env;
if (!STRIPE_API_PUBLIC_KEY || !STRIPE_API_SECRET_KEY) {
  throw new Error("Missing Stripe API keys");
}
const stripe = new Stripe(STRIPE_API_SECRET_KEY);
const CUSTOMER_ID = process.env.CUSTOMER_ID as string;

const createProduct = async () => {
  const product = await stripe.products.create({
    name: "Credit Deficiency Settlement",
  });
  console.log(`Created product: ${product.id}`);
  return product;
};

// Created product: prod_QksYCv3uJnMuXu
// {
//   id: 'prod_QksYCv3uJnMuXu',
//   object: 'product',
//   active: true,
//   attributes: [],
//   created: 1724993424,
//   default_price: null,
//   description: null,
//   images: [],
//   livemode: false,
//   marketing_features: [],
//   metadata: {},
//   name: 'Credit Deficiency Settlement',
//   package_dimensions: null,
//   shippable: null,
//   statement_descriptor: null,
//   tax_code: null,
//   type: 'service',
//   unit_label: null,
//   updated: 1724993424,
//   url: null
// }

const previewInvoice = async () => {
  const invoice = await stripe.invoices.createPreview({
    invoice_items: [
      {
        price_data: {
          product: "prod_QksYCv3uJnMuXu",
          currency: "usd",
          unit_amount: 200000, // note: set to calculate the total amount
        },
        quantity: 1,
      },
    ],
  });
  console.log(`Created invoice: ${invoice.id}`);
  console.dir(invoice.lines.data[0]);
  return invoice;
};

const createImmediateInvoice = async () => {
  const invoice = await stripe.invoices.create({
    customer: CUSTOMER_ID,
    auto_advance: true,
  });
  await stripe.invoiceItems.create({
    customer: CUSTOMER_ID,
    price_data: {
      product: "prod_QksYCv3uJnMuXu",
      currency: "usd",
      unit_amount: 200000,
    },
    invoice: invoice.id,
  });
  await stripe.invoices.pay(invoice.id);

  const result = await stripe.invoices.retrieve(invoice.id);
  console.log(`Created invoice: ${result.id}`);
  console.dir(result.lines.data[0]);
  return result;
};

console.log("Starting the script");
createImmediateInvoice().then(res => {
  console.dir(res);
  console.log("Finished the script");
});
