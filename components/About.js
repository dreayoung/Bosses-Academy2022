import { useEffect, useState } from 'react';
import Image from 'next/image';
import zae from '../public/zae.jpg';
import zaeglover from '../public/zaeglover.png';
import AboutCarousel from './AboutCarousel';

const About = () => {
  const [switchIMG, setSWitchIMG] = useState(null);

  useEffect(() => {
    setInterval(() => {
      setSWitchIMG(true);
    }, 6000);

    switchIMG
      ? setTimeout(() => {
          setSWitchIMG(null);
        }, 6000)
      : null;
  }, [switchIMG]);

  return (
    <div className="">
      <div className="lg:mt-[3.5rem] mt-[5.5rem] w-full flex justify-center items-center absolute top-40 -translate-x-1/2 -translate-y-1/2 transform left-1/2">
        <AboutCarousel />
      </div>
      <h1 className="lg:pt-20 pt-10 relative font-bold text-center text-goldie brightness-110 uppercase rob text-8xl lg:text-[15rem]">
        <span className="old text-lg lg:text-goldie text-white lowercase lg:text-4xl">
          meet
        </span>
        <br />
        The Boss
      </h1>
      <article className="rob text-center text-md lg:text-2xl text-semiblack brightness-200 p-8 lg:pt-40 m-auto lg:w-[80rem]">
        <p className="backdrop-blur-3xl lg:bg-black lg:bg-opacity-60 mt-20 p-2 shadow-2xl rounded-2xl lg:w-[30rem] w-80 border-[1px] border-black border-opacity-60 m-auto">
          <span className="rob hover:text-gray-200">
            &quot;ALWAYS remember you are the author of your own book.&quot;
          </span>
          <br />
          <span className="lg:text-lg text-xs brightness-150">
            A message from founder, Wyzae Glover
          </span>
        </p>
        <br />
        <br />
        <br /> Wyzae Glover founded the ‘Bosses Academy’ in May of 2022 in New
        York City for the ‘Future Bosses of Society’, to educate them on
        financial literacy , generational wealth and the importance of mental
        health, while providing them with a safe haven for expression.
        <br />
        <br />
        Over the years Wyzae Glover has attended seminars, received mentorship
        from established financial professionals, and diligently studied the
        world of entrepreneurship and wealth building. She has recently been
        featured on podcasts and has hosted a community information session
        entitled ‘Bosses Brunch’.
        <br />
        <br />
        As a former educator and current Supervisor of Social Work who has
        obtained accreditation in the fields Education and Psychology, Coach
        Glover recognized that financial literacy was at a deficit in the
        African-American community. She recognized that there was a need for
        programming in the likes of a new “Black Wall Street”, thus she began
        educating entrepreneurs on business structure and personal financial
        development including means on how to raise their credit and gain
        multiple streams of income.
        <br />
        <br />
        Another passion of Coach Glover is mental health awareness which led her
        to launch the “Mental Health” discussions of the Bosses Academy. This
        portion of the business is designed to be a safe haven for individuals
        who have become overwhelmed by the pressures of life and business.
      </article>
      <div className="flex justify-center">
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/episode/7t7lWtMcc851rnPoLRdIKE?utm_source=generator&theme=0"
          width="80%"
          height="152"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
