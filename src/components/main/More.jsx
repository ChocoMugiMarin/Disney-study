import React from "react";
import styles from "./More.module.css";
const article = [
  {
    href: "",
    src: "../../../1343_thum_name.jpg",
    title: "パークの体験はアプリで効率的に！",
  },
  {
    href: "",
    src: "../../../908_thum_name.jpg",
    title: "Duffy and Friends",
  },
  {
    href: "",
    src: "../../../1343_thum_name.jpg",
    title:
      "東京ディズニーリゾート・オフィシャルパークファンクラブ「ファンダフル・ディズニー」",
  },
  {
    href: "",
    src: "../../../1343_thum_name.jpg",
    title: "「ディズニー・フォト」 パークでのフォト体験を楽しもう！",
  },
  {
    href: "",
    src: "../../../1343_thum_name.jpg",
    title: "パソコンやスマートフォンで使用ができる壁紙を毎月配信。",
  },
  {
    href: "",
    src: "../../../1343_thum_name.jpg",
    title: "「東京ディズニーリゾート アンコール！ザ・モーメンツ展」開催中！",
  },
  {
    href: "",
    src: "../../../620_thum_name.jpg",
    title: "東京ディズニーランド 特設サイト",
  },
  {
    href: "",
    src: "../../../1343_thum_name.jpg",
    title: "夢をかなえるビューティーサロン ビビディ・バビディ・ブティック",
  },
  {
    href: "",
    src: "../../../1343_thum_name.jpg",
    title: "ディズニーストーリービヨンド",
  },
  {
    href: "",
    src: "../../../1343_thum_name.jpg",
    title: "パークともっと楽しくする、とっておきの1枚、ディズニー★JBCカード",
  },
  {
    href: "",
    src: "../../../1343_thum_name.jpg",
    title: "観劇後にパークも楽しめるセットチケット登場！",
  },
];

export default function More() {
  return (
    <div>
      <h2 className={styles.title_large}>
        東京ディズニーリゾートをもっと楽しもう
      </h2>
      <div className={styles.articleall}>
        {article.map((article) => {
          return (
            <div className={styles.articleone}>
              <a>
                <img src={article.src} className={styles.articleimg}></img>
                <p>{article.title}</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
