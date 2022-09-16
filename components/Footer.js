import Image from 'next/image';
import Link from 'next/link';
import ba from '../public/ba.png';

const Footer = () => {
  return (
    <footer className="p-4 bg-transparent rounded-lg shadow md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a
          href="https://flowbite.com/"
          className="flex items-center mb-4 sm:mb-0"
        >
          <Image src={ba} width={50} height={50} alt="ba logo" />
          <span className="self-center pl-4 text-2xl font-semibold whitespace-nowrap font-beyulian text-pinky">
            Bosses Academy 2022 All Rights Reserved.
          </span>
        </a>
        <ul className="lg:flex lg:flex-wrap items-center  text-sm text-pinky register">
          <li className="mr-4 hover:underline md:mr-6 ">
            <Link href="/brunch">About</Link>
          </li>
          <li className="mr-4 hover:underline md:mr-6 ">
            <Link href="#">Licensing</Link>
          </li>
          <li className="mr-4 hover:underline md:mr-6 ">
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-semiblack sm:mx-auto lg:my-8" />
      <span className="old block text-sm text-pinky sm:text-center ">
        createdbydwe{/* <Image src={ba} width={100} height={100} /> */}
      </span>
    </footer>
  );
};

export default Footer;
