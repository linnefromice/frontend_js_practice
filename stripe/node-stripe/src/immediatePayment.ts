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

console.log("Starting the script");
createProduct()
  .then(res => {
    console.dir(res);
    console.log("Finished the script");
  })
  .catch(console.error);

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
