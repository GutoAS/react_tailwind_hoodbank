import { feedback } from "../constants";
import styles from "../styles";
import FeedBackCard from "./FeedBackCard";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="z-[0] absolute w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"></div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 z-[1] relative ">
        <h1 className={styles.heading2}>
          What people are
          <br className="hidden sm:block" /> saying about us
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p
            className={`${styles.paragraph} text-left
          max-w-[450px]`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            expedita delectus velit perferendis ipsa soluta sed alias doloribus
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedBackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
