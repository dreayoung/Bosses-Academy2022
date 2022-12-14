import Image from 'next/image';
import styles from '../styles/Home.module.css';
// import brunchvid from '../public/brunchvid.mp4';
import zae from '../public/zae.jpg';
import zaeglover from '../public/zaeglover.png';

const Brunch = ({ benefits }) => {
  return (
    <div className="pt-20 lg:pt-0">
      <div className="w-full max-w-full h-auto">
        <div className="border-t-[1px] border-t-semiblack w-80 lg:w-1/2 m-auto" />
        <div className="lob text-goldie mt-20 text-center text-4xl lg:text-7xl pt-10">
          Join us for brunch!
        </div>
        <div className="mt-8">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/ZTe9vHF_aLg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="items-center register pt-40">
        <h3 className="absolute lob font-bold leading-[0.6] left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-12 text-goldie text-5xl lg:text-6xl">
          Benefits
        </h3>
      </div>
      <article className="relative grid grid-cols-1 lg:grid-cols-3">
        {benefits.map((bulletin, x) => {
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
  );
};

export default Brunch;
