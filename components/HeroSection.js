import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.ico';
import woman from '../public/woman.png';
import zaeglover from '../public/zaeglover.png';
import { BsFacebook } from 'react-icons/bs';

function HeroSection() {
  return (
    <>
      <div className="absolute right-0 top-[68%] lg:top-[20rem] lg:-bottom-72 lg:w-[60%] w-72">
        <Image src={woman} alt="woman svg" className="opacity-80 lg:opacity-60" />
      </div>
      <h1 className="relative brightness-110 my-10 text-[8vh] lg:text-[30vh] text-center text-goldie leading-[1.2] lg:leading-[0.8] uppercase rob">
        Bosses Academy
      </h1>
      <Link href="/register" className="cursor-pointer">
      <div className="relative register mt-10 items-center justify-center text-pinky text-center animate-pulse">
        Register Today
      </div>
      </Link>
    </>
  );
}

export default HeroSection;
