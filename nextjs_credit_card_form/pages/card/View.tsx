import { useState } from "react";
import styles from "./View.module.scss";

const IcArea = () => (
  <div className={styles.ic_area}>
    <div className={styles.ic_area__content}>
      <div className={styles.ic_area__inline_one}>
        <div className={styles.ic_area__inline_two}></div>
      </div>
    </div>
  </div>
);

const BrandNameArea = () => {
  const brandNames = [
    "VISA",
    "mastercard",
    "DISCOVER",
    "AMERICAN EXPRESS",
    "Diners Club",
  ];
  const [index, setIndex] = useState<number>(0);

  setInterval(() => {
    index != brandNames.length - 1 ? setIndex(index + 1) : setIndex(0);
  }, 2000);

  return <>{brandNames[index]}</>;
};

const View = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__row}>
        <div className={styles.card__ic}>
          <IcArea />
        </div>
        <div className={styles.card__brand_name}>
          <BrandNameArea />
        </div>
      </div>
      <div className={styles.wrapper__row}>
        <div className={styles.card__number}>XXXX XXXX XXXX XXXX</div>
      </div>
      <div className={styles.wrapper__row}>
        <div className={styles.card__brand_name}>Steiner</div>
        <div className={styles.card__brand_name}>03/25</div>
      </div>
    </div>
  );
};

export default View;
