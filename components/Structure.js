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
    <section className={`${styles.main} overflow-x-hidden lg:mt-20 mt-60`}>
      <div className="lg:mt-96 mt-72 py-20 lg:py-40">
        <div className="items-center">
          <h3 className="absolute rob font-bold uppercase leading-[0.6] left-[13rem] whitespace-nowrap lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-12 text-goldie text-3xl lg:text-6xl">
            Learn how to
          </h3>
        </div>
        <article className="relative grid grid-cols-1 lg:grid-cols-3">
          {learnhowto.map((bulletin, x) => {
            return (
              <div
                key={x}
                className={`${styles.card} font-beyulian uppercase text-goldie text-xl lg:text-2xl `}
              >
                {bulletin}
              </div>
            );
          })}
        </article>
      </div>
      <div className="flex lg:py-10 border-t-[1px] lg:w-96 w-40 border-t-semiblack"></div>
      <div className="flex">
        <div className="w-80 lg:w-1/2 m-auto text-goldie text-3xl lg:text-6xl items-center justify-center ">
          <div className="rob font-bold uppercase lg:pr-2 text-center lg:pl-12 lg:pt-40 py-40 leading-[4rem]">
            <span className="hover:text-white">Structure.</span>
            <span className="hover:text-white"> Repair.</span>{' '}
            <span className="hover:text-white">Gain.</span>{' '}
            <span className="hover:text-white">Achieve.</span>
            <span className="hover:text-white"> Financial Wealth.</span>{' '}
            <span className="hover:text-white">Generational Wealth.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Structure;
