import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Navbar from '../components/Navbar';
import Brunch from '../components/Brunch';
import About from '../components/About';
import Footer from '../components/Footer';
import SubscriptionsCard from '../components/SubscriptionsCard';
import Faqs from '../components/Faqs';

import zae from '../public/zae.jpg';
import zaeglover from '../public/zaeglover.png';
import signature from '../public/script-zae.png';
import PaymentForm from '../components/PaymentForm';

const benefits = [
  'Weekly Q&A Live Sessions',
  'Lifetime Access to Training',
  'Access to Discounted Trainings',
  'Opportunity to join Bosses Academy',
  'Business Brunch',
  'Networking Opportunities',
  'Access to Bonus Topics',
];

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const register = () => {
  return (
    <>
      <Navbar />
      <div className="text-center p-8">
        {/* <Link href="/brunch"> */}
        <Image
          src={signature}
          width={150}
          height={50}
          alt="wyzae g signature"
        />
        {/* </Link> */}
      </div>
      <About />
      <div className="relative lg:hidden block"></div>
      <main className={styles.main}>
        <Brunch benefits={benefits} />
        <SubscriptionsCard />
        <Faqs />
      </main>
      <Footer />
    </>
  );
};

export default register;
