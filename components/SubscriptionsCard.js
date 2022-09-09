import styles from '../styles/Home.module.css';

const subs = ['499'];

const SubscriptionsCard = () => {
  return (
    <section className="pt-20 pb-40">
      <h3 className="text-center lob font-bold text-4xl text-goldie pb-6">
        Register Today! <br/> Start a Subscription Plan
      </h3>
      <div className="relative grid grid-cols-1 m-auto space-y-16 lg:space-y-4 lg:grid-cols-3">
        {subs.map((sub, x) => {
          return (
            <article className={`${styles.subscard} relative`} key={x}>
              <div className="lob shadow-xl w-[150px] h-[120px] backdrop-filter-blur rounded-[100%] p-10 text-goldie font-bold m-auto text-center">
                ${sub}
              </div>
              <div className="text-[#D4AF37] pt-8 pb-4 register font-bold">
                Details:
              </div>
              <p className="text-goldie">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <button className="bg-[#726b6b] border-[#302e2e] text-goldie register rounded-[100%] w-[100px] h-[60px] absolute -bottom-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                buy
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default SubscriptionsCard;
