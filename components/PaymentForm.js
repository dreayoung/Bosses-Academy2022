import {
  CardElement,
  PaymentElement,
  PaymentRequestButtonElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { TextInput, Label, Checkbox, Button } from 'flowbite-react';

const PaymentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const createSubscription = async () => {
    try {
      const paymentMethod = await stripe.createPaymentMethod({
        card: elements.getElement('card'),
        type: 'card',
      });
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          paymentMethod: paymentMethod.paymentMethod.id,
        }),
      });
      if (!response.ok) return alert('Payment unsuccessful!');
      const data = await response.json();
      const confirm = await stripe.confirmCardPayment(data.clientSecret);
      if (confirm.error) return alert('Payment unsuccessful!');
      alert('Payment Successful! Subscription active.');
    } catch (err) {
      console.error(err);
      alert('Payment failed! ' + err.message);
    }
  };

  return (
    <div className="w-full">
      <form className="flex flex-col gap-4">
        <div>
          Enter your card details. <br /> Your subscription will start now.
        </div>
        <div>
          {'->'} Total due now $124.75
          <br />
          {'->'} Subscribing to{' '}
          <span className="text-goldie">Premium Plan</span>
        </div>
        <div>
          <label
            htmlFor="helper-text"
            className="block mb-2 text-sm font-medium text-silver dark:text-gray-300"
          >
            Name
          </label>
          <input
            type="email"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-transparent border-2 border-semiblack rounded-full p-4 w-full"
          />
        </div>
        <div>
          <label
            htmlFor="helper-text"
            className="block mb-2 text-sm font-medium text-silver dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border-2 border-semiblack rounded-full p-4 w-full"
          />
        </div>
        <label
          htmlFor="helper-text"
          className="block mb-2 text-sm font-medium text-silver dark:text-gray-300"
        >
          Card
        </label>
        <div className="bg-transparent border-2 border-semiblack rounded-full p-4 text-goldie">
          <CardElement />
        </div>
        <div className="flex items-center gap-2">
          <div>
            <Checkbox id="agree" required={true} /> I agree to the terms &amp;
            conditions
          </div>
        </div>
        <Button onClick={createSubscription}>Pay &amp; Subscribe</Button>
      </form>
    </div>
  );
};

export default PaymentForm;
