import styles from '../styles/Home.module.css';
import Image from 'next/image';

import Navbar from '../components/Navbar';
import Brunch from '../components/Brunch';
import About from '../components/About';
import Footer from '../components/Footer';
import SubscriptionsCard from '../components/SubscriptionsCard';

import zae from '../public/zae.jpg';
import zaeglover from '../public/zaeglover.png';
import signature from '../public/script-zae.png';

const benefits = [
  'Weekly Q&A Live Sessions',
  'Lifetime Access to Training',
  'Access to Discounted Trainings',
  'Opportunity to join Bosses Academy',
  'Business Brunch',
  'Networking Opportunities',
  'Access to Bonus Topics',
];

const brunch = () => {
  return (
    <>
      <Navbar />
      <div className="text-center p-8">
        {/* <Link href="/brunch"> */}
          <Image src={signature} width={100} height={50} />
        {/* </Link> */}
      </div>
      <About />
      <div className="relative h-80 lg:hidden block">
        <div className="absolute lg:right-20 left-10 top-10 lg:top-20">
          <Image
            src={zaeglover}
            width={300}
            height={300}
            className="rounded-lg opacity-80"
          />
        </div>
        <div className="absolute lg:right-[12rem] right-10 top-[13rem]">
          <Image
            src={zae}
            width={250}
            height={250}
            className="rounded-lg opacity-95"
          />
        </div>
      </div>
      <main className={styles.main}>
        <Brunch benefits={benefits} />
        <SubscriptionsCard />
      </main>
      <Footer />
    </>
  );
};

export default brunch;
