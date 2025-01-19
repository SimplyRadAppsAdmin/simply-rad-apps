import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`${styles.navbar}`}>
      {/* Icon/Brand on the left */}
      <div className={styles.brand}>
        <Link href="/">
          <img
            src="/logo.svg" // Replace with your brand icon
            alt="Brand Icon"
            className={styles.icon}
          />
        </Link>
      </div>

      {/* Buttons on the right */}
      <div className={styles.buttonsContainer}>
        <div className={styles.buttonsBox}>
          <button className={styles.navButton}>our offers</button>
          <button className={styles.navButton}>our work</button>
          <button className={styles.navButton}>our history</button>
          <div className={styles.verticalSpacer}></div>
          <button className={styles.navGradientButton}>Talk to us</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
