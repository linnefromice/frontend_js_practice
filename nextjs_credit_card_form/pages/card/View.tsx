import styles from "./View.module.scss";

const View = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__row}>
        <div className={styles.card__ic}>IC</div>
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
