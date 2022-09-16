import styles from '../styles/Home.module.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const SubscriptionsCard = () => {
  return (
    <section className="pt-20 pb-40">
      <h3 className="text-center lob font-bold text-4xl text-goldie pb-6">
        Register Today! <br /> Start a Subscription Plan
      </h3>
      <div className="relative m-auto grid grid-cols-2 space-x-6">
        <article className={`${styles.subscard} relative`}>
          <div className="lob shadow-xl w-[150px] h-[120px] backdrop-filter-blur rounded-[100%] p-10 text-goldie text-2xl font-bold m-auto text-center">
            $499
          </div>
          <div className="text-[#D4AF37] pt-8 pb-4 register font-bold">
            Details:
          </div>
          <p className="text-goldie">
            I am not a financial advisor. Please understand you are responsible
            for completing the course and the work you put in. The mentor is
            only able to explain and teach what they know. The progress is based
            on the effort YOU put in. Unfortunately, the mentor does not do the
            work for you . . In addition, this is a non-refundable course.
          </p>
          {/* <button className="bg-[#726b6b] border-[#302e2e] text-goldie register rounded-[100%] w-[100px] h-[60px] absolute -bottom-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            buy
          </button> */}
        </article>

        <div className="lg:pt-10">
          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionsCard;
