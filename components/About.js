import Image from 'next/image';
import zae from '../public/zae.jpg';
import zaeglover from '../public/zaeglover.png';

const About = () => {
  return (
    <div className="relative">
      <div className="h-[70vh] lg:h-auto">
        <div className="absolute hidden lg:block lg:right-20 lg:top-10">
          <Image
            src={zaeglover}
            width={300}
            height={300}
            className="rounded-lg opacity-95"
            alt="wyzae glover"
          />
        </div>
        <div className="absolute block lg:hidden lg:right-20 left-8 lg:top-20">
          <Image
            src={zaeglover}
            width={250}
            height={300}
            className="rounded-lg opacity-80"
            alt="wyzae glover"
          />
        </div>
        <div className="absolute lg:right-[12rem] right-8 top-[13rem]">
          <Image
            src={zae}
            width={250}
            height={280}
            className="rounded-lg opacity-95"
            alt="wyzae g"
          />
        </div>
      </div>
      <h1 className="font-bold lg:pl-40 text-center lg:text-left text-goldie uppercase rob text-6xl lg:text-8xl">
        <span className="old text-2xl old text-goldie lowercase">meet</span>The
        Boss
      </h1>
      <article className="old text-2xl lg:text-2xl text-semiblack p-14 lg:pl-32 lg:w-[50rem] brightness-150">
        Hey family, welcome to Bosses Academy official website. My name is{' '}
        <span className="brightness-180">Ms. Wyzae Glover</span>. I am the proud
        CEO of Bosses Academy LLC.
        <br />
        <br /> Bosses Academy LLC was founded in your very own NYC in 2022.
        Furthermore, Bosses Academy Focuses on creating Future Bosses of
        Society! No matter if you&apos;re a beginner or you&apos;ve been in
        entrepreneurship life for a while, we focus on improving, expanding and
        educating ourselves! Bosses Academy focus on helping individuals
        structure their business or businesses properly. We help individuals
        clean up their credit. We help individuals gain personal and business
        credit. We educate individuals on multiple streams of income and over
        all how to be your OWN BOSS!
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
      {/* <h2 className="text-center register">register below</h2> */}
    </div>
  );
};

export default About;
