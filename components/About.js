import Image from 'next/image';
import zae from '../public/zae.jpg';
import zaeglover from '../public/zaeglover.png';

const About = () => {
  return (
    <div className="relative h-screen">
      <h1 className="font-bold lg:pl-40 text-center lg:text-left mt-8 pt-8 uppercase text-goldie rob text-5xl lg:text-8xl leading-[0.6]">
        The Boss
      </h1>
      <article className="text-md lg:text-xl text-semiblack p-14 lg:pl-32 lg:w-[50rem]">
        Hey family , welcome to Bosses Academy official website . My name is{' '}
        <span className="text-goldie">Ms. Wyzae Glover .</span> I am the proud
        CEO of Bosses Academy LLC .<br />
        <br /> Bosses Academy LLC was founded in your very own NYC (2022) .
        Furthermore , Bosses Academy Focuses on creating Future Bosses of
        Society ! No matter if you’re a beginner or you’ve been in
        entrepreneurship life for a while , we focus on improving , expanding
        and educating ourselves ! Bosses Academy focus on helping individuals
        structure their business or businesses properly . We help individuals
        clean up their credit . We help individuals gain personal and business
        credit . We educate individuals on multiple streams of income and over
        all how to be your <span className="text-2xl">OWN BOSS !</span>
      </article>
      <div className="hidden lg:block">
      <div className="absolute lg:right-20 right-2 top-32 lg:top-20">
        <Image
          src={zaeglover}
          width={300}
          height={300}
          className="rounded-lg opacity-80"
          alt="wyzae glover"
        />
      </div>
      <div className="absolute lg:right-[12rem] right-10 top-[15rem]">
        <Image src={zae} width={250} height={250} className="rounded-lg opacity-95" alt="wyzae g" />
      </div>
      </div>
      <h2 className="text-center register">register below</h2>
    </div>
  );
};

export default About;
