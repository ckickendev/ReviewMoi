import React from "react";

export const ButtonCm = ({
  color,
  background,
  border,
  handleClickButton,
  text,
  padding,
}) => {
  return (
    <button
      style={{
        background: background || "#fff",
        color: color || "white",
        border: border || "2px solid orangered",
        padding: padding || "10px 20px",
        cursor: "pointer"
      }}
      onClick={handleClickButton}
    >
      {text || "button"}
    </button>
  );
};
