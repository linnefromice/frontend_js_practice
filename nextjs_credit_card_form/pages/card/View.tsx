import { useState, useEffect, useRef } from "react";
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

  const callback = () => {
    index != brandNames.length - 1 ? setIndex(index + 1) : setIndex(0);
  };
  const savedCallback = useRef<() => void>(() => callback());
  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    const intervalId = setInterval(tick, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return <>{brandNames[index]}</>;
};

interface ViewProp {
  cardNumber: string;
  holderName: string;
  year: string;
  month: string;
}
const View = (prop: ViewProp) => {
  const { cardNumber, holderName, year, month } = prop;
  const displayedCardNumber = (value: string) =>
    [...Array(4)]
      .map((_, i) => (value.substring(i * 4, (i + 1) * 4) + "####").slice(0, 4))
      .join(" ");
  const displayedHolderName = (value: string) => value.toUpperCase();
  const displayedYear = (value: string) =>
    parseInt(value).toString() === "NaN" ? "YY" : ("00" + value).slice(-2);
  const displayedMonth = (value: string) =>
    parseInt(value).toString() === "NaN" ? "MM" : ("00" + value).slice(-2);

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
        <div className={styles.card__number}>
          {displayedCardNumber(cardNumber)}
        </div>
      </div>
      <div className={styles.wrapper__row}>
        <div className={`${styles.card__holder} ${styles.holder_area}`}>
          <div className={styles.holder_area__label}>Card Holder</div>
          <div className={styles.holder_area__value}>
            {displayedHolderName(holderName)}
          </div>
        </div>
        <div className={`${styles.card__expires} ${styles.expires_area}`}>
          <div className={styles.expires_area__label}>Expires</div>
          <div className={styles.expires_area__value}>
            {displayedMonth(month)}/{displayedYear(year)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
