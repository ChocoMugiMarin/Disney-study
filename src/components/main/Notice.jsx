import React from "react";
import styles from "./Notice .module.css";
const article = [
  {
    title: "商品改修に関するお詫びとお知らせ",
    date: "2023.9.30 14:00更新",
  },
  {
    title: "商品改修に関するお詫びとお知らせ",
    date: "2023.9.30 14:00更新",
  },
  {
    title: "商品改修に関するお詫びとお知らせ",
    date: "2023.9.30 14:00更新",
  },
  {
    title: "商品改修に関するお詫びとお知らせ",
    date: "2023.9.30 14:00更新",
  },
];

export default function Notice() {
  return (
    <div className={styles.notice}>
      <h2 className={styles.title_large}>大切なお知らせ</h2>
      <article className={styles.articleall}>
        {article.map((article) => {
          return (
            <div className={styles.articleone}>
              <a>
                <div className={styles.article}>
                  <p>{article.title}</p>
                  <p>{article.date}</p>
                </div>
              </a>
            </div>
          );
        })}
      </article>
      <p className={styles.more}>➡️大切なお知らせ一覧</p>
      <div className={styles.another2}>
        <div className={styles.another2_2}>
          <img src="../../../parkguide.jpg" className={styles.img_small}></img>
          <div>
            <p className={styles.title}>
              ➡️【パークガイド】まずはここをチェック！
            </p>
            <p>
              パークを楽しむ基本ステップです。来園前から入園当日までに必要な準備もこちらでご確認ください。
            </p>
          </div>
        </div>
        <div className={styles.another2_2}>
          <img
            src="../../../park-safety.jpg"
            className={styles.img_small}
          ></img>
          <div>
            <p className={styles.title}>➡️東京ディズニーリゾートからのお願い</p>
            <p>
              【必ずお読みくだい】安心してパークをお楽しみいただくための取り組みと来園時のお願いについて
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
