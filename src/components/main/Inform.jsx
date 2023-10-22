import React, { useCallback, useState } from "react";
import styles from "./Inform.module.css";

const menu = [
  {
    title: "すべて",
  },
  { title: "パークチケット" },
  {
    title: "イベント/プログラム",
  },
  {
    title: "グッズ/ショップ",
  },
  {
    title: "メニュー/レストラン",
  },
  {
    title: "東京ディズニーリゾート全般",
  },
];

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
];

export default function Inform() {
  const [isShow, setIsShow] = useState(true);

  //1がクリックされた時の処理
  const [is1Clicked, setIs1Clicked] = useState(true);

  const change1Color = () => {
    setIs1Clicked((prevIs1Clicked) => !prevIs1Clicked);
    setIsShow(true);
    setIs2Clicked(false);
    setIs3Clicked(false);
    setIs4Clicked(false);
    setIs5Clicked(false);
    setIs6Clicked(false);
  };

  //2がクリックされた時の処理
  const [is2Clicked, setIs2Clicked] = useState(false);

  const change2Color = () => {
    setIs2Clicked((prevIs2Clicked) => !prevIs2Clicked);
    setIsShow(false);
    setIs1Clicked(false);
    setIs3Clicked(false);
    setIs4Clicked(false);
    setIs5Clicked(false);
    setIs6Clicked(false);
  };
  //3がクリックされた時の処理
  const [is3Clicked, setIs3Clicked] = useState(false);

  const change3Color = () => {
    setIs3Clicked((prevIs3Clicked) => !prevIs3Clicked);
    setIsShow(false);
    setIs1Clicked(false);
    setIs2Clicked(false);
    setIs4Clicked(false);
    setIs5Clicked(false);
    setIs6Clicked(false);
  };
  //4がクリックされた時の処理
  const [is4Clicked, setIs4Clicked] = useState(false);

  const change4Color = () => {
    setIs4Clicked((prevIs4Clicked) => !prevIs4Clicked);
    setIsShow(false);
    setIs1Clicked(false);
    setIs2Clicked(false);
    setIs3Clicked(false);
    setIs5Clicked(false);
    setIs6Clicked(false);
  };
  //5がクリックされた時の処理
  const [is5Clicked, setIs5Clicked] = useState(false);

  const change5Color = () => {
    setIs5Clicked((prevIs5Clicked) => !prevIs5Clicked);
    setIsShow(false);
    setIs1Clicked(false);
    setIs2Clicked(false);
    setIs3Clicked(false);
    setIs4Clicked(false);
    setIs6Clicked(false);
  };
  //6がクリックされた時の処理
  const [is6Clicked, setIs6Clicked] = useState(false);

  const change6Color = () => {
    setIs6Clicked((prevIs6Clicked) => !prevIs6Clicked);
    setIsShow(false);
    setIs1Clicked(false);
    setIs5Clicked(false);
    setIs2Clicked(false);
    setIs3Clicked(false);
    setIs4Clicked(false);
  };

  return (
    <div className={styles.inform}>
      <h2 className={styles.title_large}>更新情報</h2>

      <div className={styles.allbtn}>
        <div>
          <button
            onClick={change1Color}
            style={{ backgroundColor: is1Clicked ? "#0075c2" : "initial" }}
            className={styles.btn}
          >
            すべて
          </button>
          <button
            onClick={change2Color}
            style={{ backgroundColor: is2Clicked ? "#0075c2" : "initial" }}
            className={styles.btn}
          >
            パークチケット
          </button>
          <button
            onClick={change3Color}
            style={{ backgroundColor: is3Clicked ? "#0075c2" : "initial" }}
            className={styles.btn}
          >
            イベント/プログラム
          </button>
          <button
            onClick={change4Color}
            style={{ backgroundColor: is4Clicked ? "#0075c2" : "initial" }}
            className={styles.btn}
          >
            グッズ/ショップ
          </button>
          <button
            onClick={change5Color}
            style={{ backgroundColor: is5Clicked ? "#0075c2" : "initial" }}
            className={styles.btn}
          >
            メニュー/レストラン
          </button>
          <button
            onClick={change6Color}
            style={{ backgroundColor: is6Clicked ? "#0075c2" : "initial" }}
            className={styles.btn}
          >
            東京ディズニーリゾート全般
          </button>
        </div>
      </div>

      {/* <div className={styles.allbtn}>
        {menu.map((menu) => {
          return (
            <button
              onClick={() => {
                setIsShow(false);
                changeColor();
              }}
              className={styles.btn}
            >
              {menu.title}
            </button>
          );
        })}
      </div> */}

      {is1Clicked ? (
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
      ) : null}
      <p className={styles.more}>➡️更新情報一覧</p>
    </div>
  );
}
