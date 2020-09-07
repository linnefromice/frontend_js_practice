import { useState, useEffect } from "react";
import styles from "./Register.module.scss";
import View from "./View";

const years = [...Array(20).keys()].map((i) => (i += 2020).toString());
const months = [...Array(12).keys()].map((i) => (i += 1).toString());

const Register = () => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [holderName, setHolderName] = useState<string>("");
  const [year, setYear] = useState<string>("YEAR");
  const [month, setMonth] = useState<string>("MONTH");
  const [cvv, setCvv] = useState<string>("");

  // for debug
  useEffect(() => {
    console.log(`cardNumber: ${cardNumber}`);
  }, [cardNumber]);

  const processDisplayedCardNumber = (value: string): string => {
    return Array.from(value)
      .map((element, index) => {
        return index % 4 == 3 ? element + " " : element;
      })
      .join("")
      .substring(0, 19);
  };
  const saveCardNumber = (value: string) => {
    let number =
      value.length <= 19
        ? value.replace(/\s+/g, "")
        : value.substring(0, 19).replace(/\s+/g, "");
    number == cardNumber && value.length != 20
      ? setCardNumber(number.slice(0, -1))
      : setCardNumber(number);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__cardArea}>
        <View
          cardNumber={cardNumber}
          holderName={holderName}
          year={year}
          month={month}
        />
      </div>
      <div className={styles.wrapper__formArea}>
        <div className={styles.card_form}>
          <div className={styles.card_form__inner}>
            <div className={styles.card_form__row}>
              <div
                className={`${styles.card_form__group} ${styles.card_input}`}
              >
                <label className={styles.card_input__label}>Card Number</label>
                <input
                  className={styles.card_input__input}
                  type="text"
                  value={processDisplayedCardNumber(cardNumber)}
                  onChange={(e) => saveCardNumber(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.card_form__row}>
              <div
                className={`${styles.card_form__group} ${styles.card_input}`}
              >
                <label className={styles.card_input__label}>Card Name</label>
                <input
                  className={styles.card_input__input}
                  type="text"
                  value={holderName}
                  onChange={(e) => setHolderName(e.target.value)}
                />
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
                  <input
                    className={styles.card_input__input}
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
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
