// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  try {
    if (req.method != 'POST') return res.status(400);

    const { name, email, paymentMethod } = req.body;
    // Create a customer
    const customer = await stripe.customers.create({
      email,
      name,
      payment_method: paymentMethod,
      invoice_settings: { default_payment_method: paymentMethod },
    });
    // Create a product
    const product = await stripe.products.create({
      name: 'Premium Plan Bi-Weekly Subscription',
    });
    // Create a subscription
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [
        {
          price_data: {
            currency: 'usd',
            product: product.id,
            unit_amount: 12475,
            // unit_amount_decimal: '124.75',
            recurring: {
              interval: 'week',
              interval_count: '2',
            },
          },
        },
      ],
      billing_cycle_anchor: '1664409600',
      payment_settings: {
        payment_method_types: ['card'],
        save_default_payment_method: 'on_subscription',
      },
      expand: ['latest_invoice.payment_intent'],
    });
    // Send back the client secret for payment
    res.json({
      message: 'Subscription successfully initiated',
      clientSecret: subscription.latest_invoice.payment_intent.client_secret,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// PORTAL LINK FOR CUSTOMERS: *CAN SIGN IN WITH THEIR EMAIL* https://billing.stripe.com/p/login/test_cN203O6N8d377zq7ss
