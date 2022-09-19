import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.ico';
import woman from '../public/woman.png';
import zaeglover from '../public/zaeglover.png';
import { BsFacebook } from 'react-icons/bs';

function HeroSection() {
  return (
    <>
      <div className="absolute right-0 lg:top-[80] -bottom-20 lg:bottom-0">
        <Image src={woman} width={400} height={400} alt="woman svg" />
      </div>
      <h1 className="-mt-40 text-[8vh] lg:text-[30vh] text-center text-goldie leading-[1.2] lg:leading-[0.8] uppercase rob">
        Bosses Academy
      </h1>
      <Link href="/register">
      <div className="relative register mt-10 items-center justify-center text-pinky text-center animate-pulse">
        Registor Today
      </div>
      </Link>
      {/* <BsFacebook size={30} /> */}
    </>
  );
}

export default HeroSection;
