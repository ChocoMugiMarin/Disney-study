"use client";

import React from "react";
import Notice from "./Notice";
import Pickup from "./Pickup";
import Inform from "./Inform";
import Account from "./Account";
import More from "./More";
import Other from "./Other";
import styles from "./Main01.module.css";
import SwiperComponent from "../SwiperComponent";
export default function Main01() {
  return (
    <div>
      <SwiperComponent />
      <h1 className={styles.title}>ようこそ、東京ディズニーリゾートへ。</h1>
      <Notice></Notice>
      <Pickup></Pickup>
      <Inform></Inform>
      <Account></Account>
      <More></More>
      <Other></Other>
    </div>
  );
}
