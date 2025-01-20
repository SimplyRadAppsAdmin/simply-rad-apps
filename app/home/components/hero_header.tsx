"use client";

import React from "react";
import styles from "./heroheader.module.css"; // Import custom styles
import CardButton from "@/components/ui/buttons/cardButton";

interface HeroHeaderProps {
  videoSrc: string; // Path to the background video
  title: string; // Header title
  subtitle?: string; // Optional subtitle
}

const HeroHeader: React.FC<HeroHeaderProps> = ({
  videoSrc,
  title,
  subtitle,
}) => {
  return (
    <div className={styles.hero}>
      {/* Background Video */}
      <video className={styles.backgroundVideo} autoPlay loop muted playsInline>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className={styles.heroContent}>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        <div className={styles.card}>
          <CardButton
            text="Schedule a video call with us"
            arrowDirection="right"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
