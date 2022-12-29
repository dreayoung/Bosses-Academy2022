import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.ico';
import { BsInstagram } from 'react-icons/bs';

const Navbar = () => {
  // eslint-disable-next-line react/display-name
  const ImageNav = React.forwardRef((props, ref) => (
    <a ref={ref} {...props}>
      <div className="w-20">
      <Image
        src={logo}
        priority
        alt="bosses academy logo"
      />
      </div>
    </a>
  ));

  return (
    <nav className="bg-transparent border-b-semiblack border-b-[1px] px-2 sm:px-4 py-10">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" passHref={true}>
          <ImageNav />
        </Link>
        <div className="text-center register text-xs text-pinky">
          <p className="py-2.5">est. 2022 NYC</p>
          <Link href="https://www.instagram.com/bossesacademyllc_">
            <div className="cursor-pointer bg-semiblack text-pinky old lg:p-4 p-2 rounded-2xl flex justify-center items-center space-x-2">
              <BsInstagram />
              <span className="lg:text-sm text-xs">@bossesacademyllc_</span>
            </div>
          </Link>
        </div>
        {/*  */}
      </div>
    </nav>
  );
};

export default Navbar;
