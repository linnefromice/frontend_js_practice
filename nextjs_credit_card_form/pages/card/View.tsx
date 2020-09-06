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

/*
function useInterval(callback, delay) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const tick = () => {
      savedCallback.current()
    }
  })

  if (delay != null) {
    const id = setInterval(tick, delay)
    return () => {
      clearInterval(id)
    }
  }
}
*/

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
