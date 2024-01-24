import React from "react";

const backgroundColors = {
  default: "rgba(246, 248, 250, 1)",
  contained: "rgba(21, 101, 192, 1)",
  outlined: "rgba(255, 255, 255, 1)",
};

const colors = {
  default: "rgba(000, 000, 000, 1)",
  contained: "rgba(255, 255, 255, 1)",
  outlined: "rgba(21, 101, 192, 1)",
};

const borderColors = {
  default: "1px solid rgba(246, 248, 250, 0.5)",
  contained: "1px solid rgba(255, 255, 255, 0.5)",
  outlined: "1px solid rgba(21, 101, 192, 0.5)",
};

const sizeStyles = {
  sm: {
    fontSize: "12px",
    padding: "3px 12px",
  },
  md: {
    fontSize: "14px",
    padding: "5px 16px",
  },
  lg: {
    fontSize: "16px",
    padding: "9px 20px",
  },
};

const Button = ({ children, size = "md", variant = "default" }) => {
  return (
    <button
      css={{
        borderRadius: "6px",
        border: borderColors[variant],
        backgroundColor: backgroundColors[variant],
        boxShadow: "2px 4px 3px -3px rgba(0,0,0,0.2)",
        color: colors[variant],
        fontFamily: "roboto",
        fontWeight: "500",
        lineHeight: "20px",
        // fontSize: "14px",
        // padding: "5px 16px",
        ...sizeStyles[size],
        textAlign: "center",
        cursor: "pointer",
        appearance: "none",
        userSelect: "none",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
