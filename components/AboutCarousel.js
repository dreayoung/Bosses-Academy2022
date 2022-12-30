import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import zae from '../public/zae.jpg';
import zaeglover from '../public/zaeglover.png';

const AboutCarousel = () => {
  const [index, setIndex] = useState(0);
  const picsArr = [zae, zaeglover];

  function loop(count) {
    if (count == picsArr.length) {
      return (count = 0);
    }
    if (count < 0) {
      return (count = picsArr.length - 1);
    }
    return count;
  }

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((count) => loop(count + 1)),
      2000
    );
    return () => clearInterval(interval);
  });

  return (
    <div className="lg:w-[60%] w-full lg:h-20 h-[10rem] transform-none">
      <Image
        src={picsArr[index]}
        className={`ease-in-out opacity-40 transition m-auto`}
        alt="wyzae glover"
      />
    </div>
  );
};

export default AboutCarousel;
