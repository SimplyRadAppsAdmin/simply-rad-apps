"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import NavModal from "./nav_modal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null); // Add ref for the toggle button
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  // Toggle menu state
  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggles open/close state
  };

  // Close menu if the user clicks outside the menu or toggle button
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click target is outside both the menu and toggle button
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false); // Close the menu
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <NavModal isOpen={isModalOpen} onClose={handleClose} />
      {/* Brand (left) */}
      <div className={styles.brand}>
        <Link href="/">
          <img src="/logo.svg" alt="Brand Icon" className={styles.icon} />
        </Link>
      </div>

      {/* Hamburger Toggle (visible on mobile) */}
      <button
        ref={toggleButtonRef} // Attach ref to the toggle button
        className={styles.toggleButton}
        onClick={(e) => {
          e.stopPropagation(); // Prevent event from propagating to the document
          toggleMenu(); // Toggles menu state on click
        }}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen} // Accessibility: reflects current state
      >
        {/* Bars for the hamburger menu */}
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      {/* Buttons Container */}
      <div
        ref={menuRef} // Attach the menu container to the ref for outside-click handling
        className={`${styles.buttonsContainer} ${isOpen ? styles.open : ""}`}
      >
        <div className={styles.buttonsBox}>
          <button onClick={handleOpen} className={styles.navButton}>
            our offers
          </button>
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
