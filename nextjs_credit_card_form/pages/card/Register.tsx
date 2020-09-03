import styles from "./Register.module.scss";

const Register = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__cardArea}>Credit Card</div>
      <div className={styles.wrapper__formArea}>
        <div className={styles.card_form}>
          <div className={styles.card_form__inner}>
            <div className={styles.card_form__row}>
              <div className={styles.card_form__group}>
                <label>Card Number</label>
                <input type="text" />
              </div>
            </div>
            <div className={styles.card_form__row}>
              <div className={styles.card_form__group}>
                <label>Card Name</label>
                <input type="text" />
              </div>
            </div>
            <div className={styles.card_form__row}>
              <div className={styles.card_form__group}>
                <label>Expiration Date</label>
                <input type="text" />
                <input type="text" />
              </div>
              <div className={styles.card_form__group}>
                <label>CVV</label>
                <input type="number" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
