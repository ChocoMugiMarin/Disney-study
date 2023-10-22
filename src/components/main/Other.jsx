import React from "react";
import styles from "./Other.module.css";
const others = [
  {
    href: "",
    title: "オフィシャルスポンサー",
  },
  {
    href: "",
    title: "教育・学校関係者の皆様へ",
  },
  {
    href: "",
    title: "企業・団体向け福利厚生プログラムのご案内",
  },
  {
    href: "",
    title: "研修プログラムのご案内（ディズニーアカデミー）",
  },
  {
    href: "",
    title: "キャスト募集",
  },
  {
    href: "",
    title: "東京ディズニーリゾートからのお願い",
  },
  {
    href: "",
    title: "Disney.jp",
  },
];

export default function Other() {
  return (
    <div className={styles.allother}>
      <div className={styles.middle}>
        {others.map((others) => {
          return (
            <div className={styles.link}>
              <a>
                <p className={styles.title}>{others.title}</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
