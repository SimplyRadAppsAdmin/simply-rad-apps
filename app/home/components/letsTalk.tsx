"use client";

import React from "react";
import styles from "./letsTalk.module.css"; // Import custom styles
import CardButton from "@/components/ui/buttons/cardButton";

interface LetsTalkProps {
  title: string; // Header title
  subtitle?: string; // Optional subtitle
  subtitle2?: string;
}

const LetsTalk: React.FC<LetsTalkProps> = ({ title, subtitle, subtitle2 }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>{title}</h1>
        <p>{subtitle}</p>

        <CardButton
          text="Schedule a video call with us"
          arrowDirection="right"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default LetsTalk;
