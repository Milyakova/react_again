import { Message } from "../Message/Message";
import "./MessageList.css";

export const MessageList = ({ messages }) => (
  <div className="chat-container rounded-3 p-2 d-flex flex-column  ">
    {messages.map((msg) => (
      <Message key={msg.id} text={msg.text} author={msg.author} />
    ))}
  </div>
);
