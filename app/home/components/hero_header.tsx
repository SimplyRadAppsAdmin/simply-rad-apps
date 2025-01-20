import React from "react";
import styles from "./heroheader.module.css"; // Import custom styles
import { FaArrowRight } from "react-icons/fa";

interface HeroHeaderProps {
  videoSrc: string; // Path to the background video
  title: string; // Header title
  subtitle?: string; // Optional subtitle
  buttonText?: string; // Optional button text
  onButtonClick?: () => void; // Optional button click handler
}

const HeroHeader: React.FC<HeroHeaderProps> = ({
  videoSrc,
  title,
  subtitle,
  buttonText,
  onButtonClick,
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
        {buttonText && (
          <button onClick={onButtonClick} className={styles.heroButton}>
            {buttonText}
          </button>
        )}
        <div className={styles.card}>
          Deploy & Maintain{" "}
          <div className={styles.iconContainer}>
            <FaArrowRight className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
