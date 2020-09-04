import { useState } from "react";
import styles from "./Register.module.scss";
import View from "./View";

const years = [...Array(20).keys()].map((i) => (i += 2020).toString());
const months = [...Array(12).keys()].map((i) => (i += 1).toString());

const Register = () => {
  const [year, setYear] = useState("YEAR");
  const [month, setMonth] = useState("MONTH");

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__cardArea}>
        <View />
      </div>
      <div className={styles.wrapper__formArea}>
        <div className={styles.card_form}>
          <div className={styles.card_form__inner}>
            <div className={styles.card_form__row}>
              <div
                className={`${styles.card_form__group} ${styles.card_input}`}
              >
                <label className={styles.card_input__label}>Card Number</label>
                <input className={styles.card_input__input} type="text" />
              </div>
            </div>
            <div className={styles.card_form__row}>
              <div
                className={`${styles.card_form__group} ${styles.card_input}`}
              >
                <label className={styles.card_input__label}>Card Name</label>
                <input className={styles.card_input__input} type="text" />
              </div>
            </div>
            <div className={styles.card_form__row}>
              <div className={styles.card_form__group_half}>
                <label className={styles.card_input__label}>
                  Expiration Date
                </label>
                <div className={styles.card_expiration_area}>
                  <select
                    className={styles.card_expiration_area__select}
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  >
                    <option value="YEAR">YEAR</option>
                    {years.map((value) => {
                      return <option value={value}>{value}</option>;
                    })}
                  </select>
                  <select
                    className={styles.card_expiration_area__select}
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                  >
                    <option value="MONTH">MONTH</option>
                    {months.map((value) => {
                      return <option value={value}>{value}</option>;
                    })}
                  </select>
                </div>
              </div>
              <div className={styles.card_form__group_half}>
                <div className={styles.card_input}>
                  <label className={styles.card_input__label}>CVV</label>
                  <input className={styles.card_input__input} type="text" />
                </div>
              </div>
            </div>
            <div
              className={`${styles.card_form__row} ${styles.card_submit_area}`}
            >
              <div className={styles.card_submit_area__button}>Submit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
