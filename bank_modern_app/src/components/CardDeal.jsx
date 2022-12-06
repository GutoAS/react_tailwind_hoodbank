import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal
          <br className="sm:block hidden" />
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[420px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, expedita
          delectus velit perferendis ipsa soluta sed alias doloribus{" "}
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} className="w-[100%] h-[100%]" alt="Card" />
      </div>
    </section>
  );
};

export default CardDeal;
