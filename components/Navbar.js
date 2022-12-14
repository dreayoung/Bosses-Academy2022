import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.ico';

const Navbar = () => {
  // eslint-disable-next-line react/display-name
  const ImageNav = React.forwardRef((props, ref) => (
    <a ref={ref} {...props}>
      <Image
        src={logo}
        width={50}
        height={50}
        priority
        alt="bosses academy logo"
      />
    </a>
  ));

  return (
    <nav className="bg-transparent border-b-semiblack border-b-[1px] px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" passHref={true}>
          <ImageNav />
        </Link>
        {/* <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-pinky rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              cliprule="evenodd"
            ></path>
          </svg>
        </button> */}
        <div className="register text-xs text-pinky hidden lg:block">
          est. 2022 NYC
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
