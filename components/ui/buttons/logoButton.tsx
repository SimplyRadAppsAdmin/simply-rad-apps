import React from "react";
import { IconType } from "react-icons"; // Import the IconType for type safety
import styles from "./logoButton.module.css";

interface LogoButtonProps {
  Icon: IconType; // Use IconType to pass a React Icon component
  text: string;
}

const LogoButton: React.FC<LogoButtonProps> = ({ Icon, text }) => {
  return (
    <div className={styles.button}>
      <Icon className={styles.icon} color="black" /> {/* Render the icon */}
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default LogoButton;
