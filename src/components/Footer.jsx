import React from "react";
import Link from "next/link";
import styles from "./Footer .module.css";

export default function Footer() {
  return (
    <div>
      <div className={styles.all}>
        <Link href="" className={styles.one}>
          <p>サイトマップ</p>
        </Link>
        <Link href="" className={styles.one}>
          <p>プライバシーポリシー</p>
        </Link>
        <Link href="" className={styles.one}>
          <p>法的制約と使用条件</p>
        </Link>
        <Link href="" className={styles.one}>
          <p>テーマパーク利用約款</p>
        </Link>
        <Link href="" className={styles.one}>
          <p>著作権・商標</p>
        </Link>
        <Link href="" className={styles.one}>
          <p>株式会社オリエンタルランド</p>
        </Link>
        <Link href="" className={styles.one}>
          <p>Disney.jp</p>
        </Link>
      </div>
      <p className={styles.last}>Disney. All rights reserved</p>
    </div>
  );
}
