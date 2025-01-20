import React, { useState } from "react";

export interface OutlineButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The button's label or child elements.
   */
  children: React.ReactNode;
  /**
   * Click handler function.
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * The outline (border) color. Defaults to #333.
   */
  borderColor?: string;
  /**
   * The text color. Defaults to #333.
   */
  textColor?: string;
  /**
   * The border-radius. Defaults to 8px.
   */
  borderRadius?: string;
  /**
   * The padding inside the button. Defaults to 0.75rem 1rem.
   */
  padding?: string;
  /**
   * The background color to use on hover. Defaults to #f0f0f0 (light gray).
   */
  hoverBgColor?: string;
  /**
   * Optional inline styles.
   */
  style?: React.CSSProperties;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({
  children,
  onClick,
  borderColor = "#333",
  textColor = "#333",
  borderRadius = "8px",
  padding = "0.75rem 1rem",
  hoverBgColor = "#f0f0f0", // default hover background color
  style = {},
  ...props
}) => {
  // Local state to track hover status
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      // Track mouse enter & leave to update hover state
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? hoverBgColor : "transparent",
        marginRight: 14,
        marginTop: 10,
        border: `1px solid ${borderColor}`,
        color: textColor,
        borderRadius: borderRadius,
        padding: padding,
        cursor: "pointer",
        fontWeight: 300,
        transition: "background-color 0.2s ease", // optional smooth transition
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
