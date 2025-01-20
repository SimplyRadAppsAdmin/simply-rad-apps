"use client";

import React from "react";
import styles from "./ourbackground.module.css"; // Import custom styles
import OutlineButton from "@/components/ui/buttons/outlineButton";

interface OurBackgroundProps {
  title: string; // Header title
  subtitle?: string; // Optional subtitle
  subtitle2?: string;
}

const OurBackground: React.FC<OurBackgroundProps> = ({
  title,
  subtitle,
  subtitle2,
}) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        {subtitle2 && <p>{subtitle2}</p>}
        <div
          style={{
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <OutlineButton
            borderColor="#FFFFFF"
            textColor="#FFFFFF"
            hoverBgColor="#262526"
          >
            Child Welfare
          </OutlineButton>
          <OutlineButton
            borderColor="#FFFFFF"
            textColor="#FFFFFF"
            hoverBgColor="#262526"
          >
            Music and Dance
          </OutlineButton>
          <OutlineButton
            borderColor="#FFFFFF"
            textColor="#FFFFFF"
            hoverBgColor="#262526"
          >
            High Tech Consulting
          </OutlineButton>
        </div>
        <div
          style={{
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <OutlineButton
            borderColor="#FFFFFF"
            textColor="#FFFFFF"
            hoverBgColor="#262526"
          >
            Expedition Guidance
          </OutlineButton>
          <OutlineButton
            borderColor="#FFFFFF"
            textColor="#FFFFFF"
            hoverBgColor="#262526"
          >
            Local Government
          </OutlineButton>
          <OutlineButton
            borderColor="#FFFFFF"
            textColor="#FFFFFF"
            hoverBgColor="#262526"
          >
            Start-Up Creation
          </OutlineButton>
        </div>
      </div>
    </div>
  );
};

export default OurBackground;
