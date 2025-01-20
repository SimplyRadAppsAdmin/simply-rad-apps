import React from "react";
import styles from "./whatwedo.module.css";
import { FaArrowDown } from "react-icons/fa";

const WhatWeDo: React.FC = () => {
  return (
    <section className={styles.whatWeDo}>
      <div className={styles.content}>
        <h3>WHAT WE DO</h3>
        <h2>
          We turn ideas into <br /> beautiful products
        </h2>
        <p>We meet you where you are, and help you get where you want to be.</p>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          Design{" "}
          <div className={styles.iconContainer}>
            <FaArrowDown className={styles.icon} />
          </div>
        </div>
        <div className={styles.card}>
          Develop{" "}
          <div className={styles.iconContainer}>
            <FaArrowDown className={styles.icon} />
          </div>
        </div>
        <div className={styles.card}>
          Deploy & Maintain{" "}
          <div className={styles.iconContainer}>
            <FaArrowDown className={styles.icon} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
