import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
// import { motion } from 'framer-motion';

// import structure from '../public/brunch.mp4';

const learnhowto = [
  'Fix your personal credit',
  'GAIN personal and business credit',
  'Learn financial literacy',
  'Learn utilization techniques',
  'Establish multiple streams of income and more',
];

const Structure = () => {
  return (
    <section className={`${styles.main} overflow-x-hidden`}>
      <div className="flex mt-40 mb-3">
        <div className="relative border-t-[1px] border-t-semiblack w-80 lg:w-1/2 lg:ml-80 font-light text-goldie text-3xl lg:text-6xl items-center justify-center ">
          <div className="rob font-bold uppercase lg:pr-2 text-center lg:pl-12 pt-40 pb-40 leading-[4rem]">
            Structure. Repair. Gain. Achieve. Financial Wealth. Generational
            Wealth.
          </div>
        </div>
      </div>
      {/* <div className="absolute -left-10 lg:hidden block">
        <Image src={bow} width={200} height={200} />
      </div> */}
      <div className="pt-40 border-t-[1px] border-t-semiblack">
        <div className="items-center">
          <h3 className="absolute rob font-bold uppercase leading-[0.6] left-[13rem] whitespace-nowrap lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-12 text-goldie text-4xl lg:text-6xl">
            Learn how to
          </h3>
        </div>
        <article className="relative grid grid-cols-1 lg:grid-cols-3">
          {learnhowto.map((bulletin, x) => {
            return (
              <div
                key={x}
                className={`${styles.card} font-beyulian uppercase text-goldie text-2xl`}
              >
                {bulletin}
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default Structure;
