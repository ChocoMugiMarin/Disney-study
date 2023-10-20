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

  // const click = (e) => {
  //   //useStateをfalseにする処理を書くのと
  //   setIsShow(false);
  // };

  // document.addEventListener("DOMContentLoaded", function () {
  //   // ここにコードを書く
  //   document.getElementById("mmm").onclick = function () {
  //     this.style.backgroundColor = red;
  //   };
  // });

  //1がクリックされた時の処理
  const [is1Clicked, setIs1Clicked] = useState(true);

  const change1Color = () => {
    setIs1Clicked((prevIs1Clicked) => !prevIs1Clicked);
    setIsShow(true);
    setIs2Clicked(false);
  };

  //2がクリックされた時の処理
  const [is2Clicked, setIs2Clicked] = useState(false);

  const change2Color = () => {
    setIs2Clicked((prevIs2Clicked) => !prevIs2Clicked);
    setIsShow(false);
    setIs1Clicked(false);
  };

  // const changeShow = () => {
  //   setIsShow(true);
  // };

  // const moe = () => {
  //   changeColor();
  //   changeShow();
  // };

  return (
    <div className={styles.inform}>
      <h2 className={styles.title_large}>更新情報</h2>

      <div className={styles.allbtn}>
        <div>
          <button
            onClick={change1Color}
            style={{ backgroundColor: is1Clicked ? "#3fb811" : "initial" }}
            className={styles.btn}
          >
            すべて
          </button>
          <button
            onClick={change2Color}
            style={{ backgroundColor: is2Clicked ? "#3fb811" : "initial" }}
            className={styles.btn}
          >
            パークチケット
          </button>
          <button
            onClick={() => {
              setIsShow(false);
            }}
            className={styles.btn}
          >
            イベント/プログラム
          </button>
          <button
            onClick={() => {
              setIsShow(false);
            }}
            className={styles.btn}
          >
            グッズ/ショップ
          </button>
          <button
            onClick={() => {
              setIsShow(false);
            }}
            className={styles.btn}
          >
            メニュー/レストラン
          </button>
          <button
            onClick={() => {
              setIsShow(false);
            }}
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
