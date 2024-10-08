"use client";

import React from "react";
import styles from "./Experience.module.scss";
import Item from "@/components/Blocks/Experience/Item/Item";
import Title from "@/components/UI/Elements/Title/Title";
import Companies from "@/database/Companies.json";
import Blobs from "@/components/UI/Elements/Blobs/Blobs";

export default function ExperienceBlock() {

  return (
    <section className={styles.section} id={"experience"}>
      <Blobs type={"v2"} classVariable={`${styles.blob}`} />
      <header className={styles.header}>
        <Title color={"white"}>
          <span>Experience</span> <br />
          History
        </Title>
      </header>
      {Companies.map((company, index) => (
        <Item {...company} key={index}/>
      ))}
    </section>
  );
}
