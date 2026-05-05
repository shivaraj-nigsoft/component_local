import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
  textColor?: string;
}

export default function Button({ children, onClick, color = '#007bff', textColor = '#fff' }: ButtonProps) {
  return (
    <button
      style={{
        padding: "10px 20px",
        background: color,
        color: textColor,
        borderRadius: "6px",
        border: "none",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
