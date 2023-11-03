import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <div className={styles.head}>
      <button className={styles.btnLeft}>
        <p>TokyoDisneyResort</p>
      </button>
      <div className={styles.moe}>
        <button className={styles.btn1}>
          <Image
            src="description_black_24dp.svg"
            width={50}
            height={50}
            alt=""
            className={styles.btnRight}
          />
          <p>HOME</p>
        </button>
        <button className={styles.btn2}>
          <Image
            src="home_black_24dp.svg"
            width={50}
            height={50}
            alt=""
            className={styles.btnRight}
          />
          <p>東京ディズニーランド</p>
        </button>
        <button className={styles.btn3}>
          <Image
            src="home_black_24dp.svg"
            width={50}
            height={50}
            alt=""
            className={styles.btnRight}
          />
          <p>東京ディズニーシー</p>
        </button>
        <button className={styles.btn4}>
          <Image
            src="home_black_24dp.svg"
            width={50}
            height={50}
            alt=""
            className={styles.btnRight}
          />
          <p>ホテル</p>
        </button>
        <button className={styles.btn5}>
          <Image
            src="description_black_24dp.svg"
            width={50}
            height={50}
            alt=""
            className={styles.btnRight}
          />
          <p>予約/購入</p>
        </button>
      </div>
      <div className={styles.headerRightMenu}>
        <div className="menu">
          <Image
            src="description_black_24dp.svg"
            width={24}
            height={24}
            alt=""
            className={styles.menuBtn}
          />
          お気に入り
        </div>
        <div className="menu">
          <Image
            src="description_black_24dp.svg"
            width={24}
            height={24}
            alt=""
            className={styles.menuBtn}
          />
          Language
        </div>
      </div>
    </div>
  );
}
