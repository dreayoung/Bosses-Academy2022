import Image from 'next/image';
import styles from '../styles/Home.module.css';
// import brunchvid from '../public/brunchvid.mp4';
import zae from '../public/zae.jpg';
import zaeglover from '../public/zaeglover.png';

const Brunch = ({ benefits }) => {
  return (
    <div className="pt-20 lg:pt-0">
      <div className="w-full max-w-full h-auto">
        <div className="lob text-goldie mt-20 text-center text-5xl lg:text-8xl rounded-lg border border-semiblack dark:border-gray-700">
          join us for brunch
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
        <h3 className="absolute rob font-bold uppercase leading-[0.6] left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-12 text-goldie text-5xl lg:text-6xl">
          Benefits
        </h3>
      </div>
      <article className="grid grid-cols-2 lg:grid-cols-3">
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
