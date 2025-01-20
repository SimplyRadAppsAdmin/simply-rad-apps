"use client";

import React from "react";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import styles from "./cardButton.module.css";

interface CardButtonProps {
  text: string; // Text inside the card
  arrowDirection: "right" | "down"; // Arrow direction
  onClick: () => void; // Click event handler
}

const CardButton: React.FC<CardButtonProps> = ({
  text,
  arrowDirection,
  onClick,
}) => {
  return (
    <button className={styles.cardButton} onClick={onClick}>
      <span className={styles.text}>{text}</span>
      <div className={styles.iconContainer}>
        {arrowDirection === "right" ? (
          <FaArrowRight className={styles.icon} />
        ) : (
          <FaArrowDown className={styles.icon} />
        )}
      </div>
    </button>
  );
};

export default CardButton;
