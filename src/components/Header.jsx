import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.head}>
      <button className={styles.btnLeft}>
        <p>TokyoDisneyResort</p>
      </button>
      <div className={styles.moe}>
        <button className={styles.btn1}>
          <img
            src="description_black_24dp.svg"
            className={styles.btnRight}
          ></img>
          <p>HOME</p>
        </button>
        <button className={styles.btn2}>
          <img src="home_black_24dp.svg" className={styles.btnRight}></img>
          <p>東京ディズニーランド</p>
        </button>
        <button className={styles.btn3}>
          <img
            src="description_black_24dp.svg"
            className={styles.btnRight}
          ></img>
          <p>東京ディズニーシー</p>
        </button>
        <button className={styles.btn4}>
          <img src="home_black_24dp.svg" className={styles.btnRight}></img>
          <p>ホテル</p>
        </button>
        <button className={styles.btn5}>
          <img
            src="description_black_24dp.svg"
            className={styles.btnRight}
          ></img>
          <p>予約/購入</p>
        </button>
      </div>
    </div>
  );
}
