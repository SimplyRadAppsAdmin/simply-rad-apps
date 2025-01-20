"use client";

import React from "react";
import styles from "./toolbelt.module.css"; // Import custom styles
import LogoButton from "@/components/ui/buttons/logoButton";
import { FaAmazon, FaFigma, FaGithub, FaUber } from "react-icons/fa";
import { SiAsana, SiFramer, SiAna, SiConfluence } from "react-icons/si";

interface ToolBeltProps {
  title: string; // Header title
  subtitle?: string; // Optional subtitle
  subtitle2?: string;
}

const ToolBelt: React.FC<ToolBeltProps> = ({ title, subtitle, subtitle2 }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>{title}</h1>
        <div className={styles.grid}>
          <LogoButton Icon={FaGithub} text="GitHub" />
          <LogoButton Icon={FaFigma} text="Figma" />
          <LogoButton Icon={FaAmazon} text="Amazon" />
          <LogoButton Icon={FaUber} text="Uber" />
          <LogoButton Icon={SiAsana} text="Asana" />
          <LogoButton Icon={SiFramer} text="Framer" />
          <LogoButton Icon={SiAna} text="Anima" />
          <LogoButton Icon={SiConfluence} text="Confluence" />
        </div>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default ToolBelt;
