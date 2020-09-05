import styles from "./View.module.scss";

const View = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__row}>
        <div className={styles.card__ic}>
          <div className={styles.ic_area}>
            <div className={styles.ic_area__content}>
              <div className={styles.ic_area__inline_one}>
                <div className={styles.ic_area__inline_two}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card__brand_name}>VISA</div>
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
