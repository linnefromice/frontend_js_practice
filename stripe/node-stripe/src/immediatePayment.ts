import "dotenv/config";
import Stripe from "stripe";

const { STRIPE_API_PUBLIC_KEY, STRIPE_API_SECRET_KEY } = process.env;
if (!STRIPE_API_PUBLIC_KEY || !STRIPE_API_SECRET_KEY) {
  throw new Error("Missing Stripe API keys");
}
const stripe = new Stripe(STRIPE_API_SECRET_KEY);

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

const previewInvoice = async (
  price_data: Stripe.InvoiceCreatePreviewParams.InvoiceItem.PriceData
) => {
  const invoice = await stripe.invoices.createPreview({
    invoice_items: [
      {
        price_data,
        quantity: 1,
      },
    ],
  });
  console.log(`Created invoice: ${invoice.id}`);
  console.dir(invoice.lines.data[0]);
  return invoice;
};

const createImmediateInvoice = async (
  customer: string,
  price_data: Stripe.InvoiceItemCreateParams.PriceData
) => {
  const invoice = await stripe.invoices.create({
    customer,
    auto_advance: true,
  });
  await stripe.invoiceItems.create({
    customer,
    price_data,
    invoice: invoice.id,
  });
  await stripe.invoices.pay(invoice.id);

  return invoice.id;
};

const execute = async () => {
  const customer = process.env.CUSTOMER_ID as string;
  const price_data = {
    product: "prod_QksYCv3uJnMuXu",
    currency: "usd",
    unit_amount: 200000, // note: set to calculate the total amount
  };

  const preview = await previewInvoice(price_data);
  console.log(`Previewed invoice: ${preview.id}`);
  console.dir(preview);
  console.dir(preview.lines.data[0]);

  const invoiceId = await createImmediateInvoice(customer, price_data);
  console.log(`Payed invoice: ${invoiceId}`);
  const result = await stripe.invoices.retrieve(invoiceId);
  console.dir(result);
  console.dir(result.lines.data[0]);
};

console.log("Starting the script");
execute().then(() => console.log("Finished the script"));
