import React from "react";
import "./message.styles.css";
export const Message = ({ content }) => {
  return (
    <div>
      <b>{content.author}: </b>
      {content.text}
    </div>
  );
};
