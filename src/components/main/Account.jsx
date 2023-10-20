import React from "react";
import styles from "./Accont .module.css";

const sns = [
  {
    href: "",
    src: "../../../icon_tiktok.svg",
    title: "TikTok",
    name: "@tdr_pr",
  },
  {
    href: "",
    src: "../../../icon_twitter.svg",
    title: "Twitter",
    name: "@tdr_pr",
  },
  {
    href: "",
    src: "../../../icon_instagram.svg",
    title: "Instgram",
    name: "@tdr_pr",
  },
  {
    href: "",
    src: "../../../icon_facebook.svg",
    title: "Facebook",
    name: "@tdr_pr",
  },
  {
    href: "",
    src: "../../../icon_youtube.svg",
    title: "Youtube",
    name: "@tdr_pr",
  },
  {
    href: "",
    src: "../../../icon_line.svg",
    title: "Line",
    name: "@tdr_pr",
  },
];

export default function Account() {
  return (
    <div>
      <h2 className={styles.title_large}>公式アカウントをフォローしよう</h2>
      <div className={styles.dis}>
        <p>
          最新情報や楽しいお知らせを発信中！
          <br />
          ※外部サイトへリンク
        </p>
      </div>
      <div className={styles.alll}>
        {sns.map((sns) => {
          return (
            <div className={styles.snsall}>
              <button className={styles.btn}>
                <img src={sns.src} className={styles.btnimg}></img>
                <div className={styles.btnp}>
                  <p className={styles.title}>{sns.title}</p>
                  <p>{sns.name}</p>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
