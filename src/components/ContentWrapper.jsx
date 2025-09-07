import React from "react";

export default function ContentWrapper({ children, style = {} }) {
  return (
    <div
      style={{
        maxWidth: "1100px",
        width: "100%",
        margin: "0 auto",
        padding: "0 2vw",
        boxSizing: "border-box",
        ...style,
      }}
    >
      {children}
    </div>
  );
}