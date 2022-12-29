import Image from 'next/image';
import Link from 'next/link';
import { BsInstagram } from 'react-icons/bs';
import zae from '../public/zae.jpg';
import zaeglover from '../public/zaeglover.png';

const About = () => {
  return (
    <div className="">
      <div className="h-[70vh] flex lg:flex-row justify-center items-center absolute top-60 -translate-x-1/2 -translate-y-1/2 transform left-1/2">
        <div className="lg:w-[40rem] lg:h-60 w-[12rem] h-[20rem] -backdrop-hue-rotate-180">
          <Image src={zaeglover} className="opacity-40" alt="wyzae glover" />
        </div>
        <div className="lg:w-[40.8rem] lg:h-60 w-[12em] h-[20rem]">
          <Image src={zae} className="opacity-40" alt="wyzae glover" />
        </div>
      </div>
      <Link href="https://www.instagram.com/bossesacademyllc_">
        <div className="cursor-pointer absolute lg:top-2 top-4 right-2 bg-semiblack text-pinky old lg:p-4 p-2 rounded-2xl flex justify-center items-center space-x-2">
          <BsInstagram size={20} />
          <span className="lg:text-sm text-xs">@bossesacademyllc_</span>
        </div>
      </Link>
      <h1 className="pt-20 relative font-bold text-center text-goldie uppercase rob text-8xl lg:text-[15rem]">
        <span className="old text-lg text-goldie lowercase lg:text-4xl">
          meet
        </span>
        <br />
        The Boss
      </h1>
      <article className="rob text-center text-md lg:text-2xl text-pinky p-14 lg:pt-40 m-auto lg:w-[80rem]">
        <p className="backdrop-blur-3xl bg-black p-2 bg-opacity-40 rounded-2xl lg:w-[30rem] m-auto">
          <span className="rob hover:text-gray-200">
            &quot;ALWAYS remember you are the author of your own book.&quot;
          </span>
          <br />
          <span className="lg:text-lg text-xs lowercase brightness-150">
            A MESSAGE FROM FOUNDER , WYZAE GLOVER
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
        As a former educator and social worker who has obtained accreditation in
        the fields Education and Psychology, Coach Glover recognized that
        financial literacy was at a deficit in the African-American community.
        She recognized that there was a need for programming in the likes of a
        new “Black Wall Street”, thus she began educating entrepreneurs on
        business structure and personal financial development including means on
        how to raise their credit and gain multiple streams of income.
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
