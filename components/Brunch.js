import styles from '../styles/Home.module.css';

const Brunch = ({ benefits }) => {
  return (
    <div className={`${styles.main} pt-20 lg:pt-0`}>
      <div className="w-full max-w-full h-auto">
        <div className="border-t-[1px] border-t-semiblack w-80 lg:w-1/2 m-auto" />
        <div className="lob text-goldie mt-20 text-center text-4xl lg:text-7xl pt-10">
          Join us for brunch!
        </div>
        <div className="lg:mt-20">
          <video
            controls
            auto="true"
            width="100%"
            poster={'/ba.png'}
            className="w-full h-[25rem]"
          >
            <source src="/videos/brunch.mp4" type="video/mp4" />
            Sorry, your browser doesnt support videos.
          </video>
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
