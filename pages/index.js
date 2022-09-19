import Image from 'next/image';
import Link from 'next/link';
import Faqs from '../components/Faqs';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Structure from '../components/Structure';
import signature from '../public/script-zae.png';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center p-4 cursor-pointer">
        <Link href="/register">
          <Image src={signature} width={100} height={50} alt="wyzae g signature"/>
        </Link>
      </div>
      <main className={styles.main}>
        <HeroSection />
      </main>
      <Structure />
      <Footer />
    </>
  );
}
