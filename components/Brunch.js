import { useState } from 'react';
import Link from 'next/link';
import { BsPlayCircle, BsYoutube } from 'react-icons/bs';
import styles from '../styles/Home.module.css';

const Brunch = ({ benefits }) => {
  const [playV, setPlay] = useState(true);

  return (
    <div className={`${styles.main} pt-20 lg:pt-0`}>
      <div className="w-full max-w-full h-auto">
        <div className="border-t-[1px] border-t-semiblack w-80 lg:w-1/2 m-auto" />
        <div className="lob text-goldie mt-20 text-center text-4xl lg:text-7xl pt-10">
          Join us for brunch!
        </div>
        <Link href="https://www.youtube.com/@bossesacademyllc5124">
          <div className="lg:text-2xl flex justify-center items-center rounded-2xl bg-semiblack text-pinky m-auto w-40 lg:w-full mt-8 p-4 space-x-4 cursor-pointer hover:brightness-200">
            <BsYoutube size={25} />
            <p>Subscribe!</p>
          </div>
        </Link>
        <div className="lg:mt-20 rounded-2xl cursor-pointer relative">
          <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 w-40">
            <BsPlayCircle
              className={`${
                !playV ? 'opacity-0' : 'opacity-100'
              } transition ease-in-out delay-[0.3s] m-auto text-4xl text-goldie `}
            />
          </div>
          <video
            auto="true"
            width="100%"
            height="100%"
            className="w-full h-[25rem] lg:rounded-full"
            onClick={(e) => {
              playV ? e.target.play() : e.target.pause();
              setPlay(!playV);
            }}
          >
            <source src="/videos/brunch.mp4" type="video/mp4" />
            Sorry, your browser doesnt support videos.
          </video>
        </div>
      </div>
      <div className="items-center register pt-40">
        <h3 className="absolute lob font-bold leading-[0.6] left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-12 text-goldie text-4xl lg:text-6xl">
          Benefits
        </h3>
      </div>
      <article className="relative grid grid-cols-1 lg:grid-cols-3">
        {benefits.map((bulletin, x) => {
          return (
            <div
              key={x}
              className={`${styles.card} font-beyulian uppercase text-goldie text-xl lg:text-2xl`}
            >
              {bulletin}
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default Brunch;
