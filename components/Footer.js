import Image from 'next/image';
import Link from 'next/link';
import ba from '../public/ba.png';

const Footer = () => {
  return (
    <footer className="p-4 bg-transparent rounded-lg shadow md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <Image src={ba} width={50} height={50} alt="ba logo" />
          <span className="self-center pl-4 text-2xl font-semibold whitespace-nowrap font-beyulian text-pinky">
            Bosses Academy 2022 All Rights Reserved.
          </span>
        </div>
        <ul className="lg:flex lg:flex-wrap items-center  text-sm text-pinky register">
          <li className="mr-4 hover:underline md:mr-6 ">
            <Link href="/register">About</Link>
          </li>
          <li className="mr-4 hover:underline md:mr-6 ">
            <Link href="mailto:bc@bossesacademy.org?subject=Contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-semiblack sm:mx-auto lg:my-8" />
      <Link href="https://www.instagram.com/createdbydwe">
        <span className="old block text-sm text-pinky hover:brightness-150 sm:text-center ">
          site createdbydwe {`</>`}
        </span>
      </Link>
    </footer>
  );
};

export default Footer;
