import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../utils/ThemeContext";
import "./message.styles.css";

export const Message = ({ author, text }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className="rounded-3 message m-3 w-75">
      <span>{author}:</span>
      <span>{text}</span>
    </div>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string,
};

// import React from "react";

// export class Message extends React.Component {
//   render() {
//     const { name, asd, doSmth } = this.props;
//     return (
//       <h3 onClick={doSmth}>
//         I am a message: {name}, {asd}
//       </h3>
//     );
//   }
// }
