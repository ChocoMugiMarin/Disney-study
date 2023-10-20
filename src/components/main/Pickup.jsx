import React from "react";
import styles from "./ Pickup.module.css";

const pick = [
  {
    src: "../../../christmas.jpg",
    title: "ディズニー仮装",
    date: "2023年9月14日（木）〜2023年10月31日（火）",
  },
  {
    src: "../../../40th.jpg",
    title: "ディズニー仮装",

    date: "2023年9月14日（木）〜2023年10月31日（火）",
  },
  {
    src: "../../../believe.jpg",
    title: "ディズニー仮装",
    date: "2023年9月14日（木）〜2023年10月31日（火）",
  },
  {
    src: "../../../christmas.jpg",
    title: "ディズニー仮装",
    date: "2023年9月14日（木）〜2023年10月31日（火）",
  },
  {
    src: "../../../christmas.jpg",
    title: "ディズニー仮装",
    date: "2023年9月14日（木）〜2023年10月31日（火）",
  },
  {
    src: "../../../check-package3.jpg",
    title: "ディズニー仮装",
    date: "2023年9月14日（木）〜2023年10月31日（火）",
  },
  {
    src: "../../../christmas.jpg",
    title: "ディズニー仮装",
    date: "2023年9月14日（木）〜2023年10月31日（火）",
  },
];

export default function Pickup() {
  return (
    <div className={styles.pickup}>
      <h2 className={styles.title_large}>ピックアップ</h2>
      <article className={styles.articleall}>
        <div className={styles.articleLeft}>
          <img src="../../../christmas.jpg" className={styles.imgleft}></img>
          <p className={styles.title}>➡️ディズニー・ハロウィン</p>
          <p className={styles.date}>
            2023年9月15日（金）〜2023年10月31日（火）
          </p>
        </div>
        <div className={styles.articleright}>
          {pick.map((pick) => {
            return (
              <a>
                <img src={pick.src} className={styles.imgright}></img>
                <p className={styles.title}>{pick.title}</p>
                <p className={styles.date}>{pick.date}</p>
              </a>
            );
          })}
        </div>
      </article>
    </div>
  );
}
