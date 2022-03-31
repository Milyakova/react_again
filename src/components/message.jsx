import React from "react";
export const Message = ({ content }) => {
  return (
    <div>
      <b>{content.author}: </b>
      {content.text}
    </div>
  );
};
