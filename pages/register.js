import styles from '../styles/Home.module.css';
import React, { useEffect, useState } from 'react';

import Navbar from '../components/Navbar';
import Brunch from '../components/Brunch';
import About from '../components/About';
import Footer from '../components/Footer';

import signature from '../public/script-zae.png';

import { PopupWidget } from 'react-calendly';

import Link from 'next/link';
import Image from 'next/image';

const benefits = [
  'Weekly Q&A Live Sessions',
  'Lifetime Access to Training',
  'Access to Discounted Trainings',
  'Opportunity to join Bosses Academy',
  'Business Brunch',
  'Networking Opportunities',
  'Access to Bonus Topics',
];

const Register = () => {
  const [elementS, setElementS] = useState(null);

  useEffect(() => {
    const input = document.getElementById('root');
    setElementS(input);
  }, []);
  return (
    <>
      <Navbar />
      <div className="text-center p-8">
        <Link href="/brunch">
          <Image
            src={signature}
            width={150}
            height={50}
            alt="wyzae g signature"
          />
        </Link>
      </div>
      <PopupWidget
        url="https://calendly.com/bosses-academy/30min"
        rootElement={elementS}
        text="Book a Consultation!"
        pageSettings={{
          backgroundColor: '000000',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: 'f3d8b3',
          textColor: 'ffffff',
        }}
      />
      <About />
      <div className="relative lg:hidden block"></div>
      <main className={styles.main}>
        <Brunch benefits={benefits} />
      </main>
      <Footer />
    </>
  );
};

export default Register;
