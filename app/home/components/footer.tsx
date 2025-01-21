import React from "react";
import Link from "next/link";
import styles from "./footer.module.css";
import { FaBasketballBall, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.left}>
          <Link href="/">
            <img src="/purple_logo.svg" alt="Brand Icon" />
          </Link>
          <h1>
            Let’s make <br />
            something together
          </h1>
        </div>

        {/* Middle Section */}
        <div className={styles.middle}>
          <div className={styles.column}>
            <Link href="/applications">Applications</Link>
            <Link href="/websites">Websites</Link>
            <Link href="/consulting">Consulting</Link>
          </div>
          <div className={styles.column}>
            <Link href="/our-work">Our Work</Link>
            <Link href="/our-story">Our Story</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.right}>
          <div className={styles.icon}>
            <FaInstagram size={27} />
          </div>
          <div className={styles.icon} style={{ marginLeft: "75px" }}>
            <FaBasketballBall size={27} />
          </div>
          <div className={styles.icon}>
            <FaLinkedinIn size={27} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
