import { useEffect, useRef, useState } from "react";
import { useParams, Navigate } from "react-router";

import { Form } from "../components/Form/Form";
import { MessageList } from "../components/MessageList/MessageList";
import { AUTHORS } from "../utils/constants";
import "./Chat.css";

// const name = "value";

// const obj = {
//   name: 1,
//   [name]: 2,
// };

// console.log(obj.name, obj.value);

export function Chat({ messages, addMessage }) {
  const { id } = useParams();

  const timeout = useRef();
  const wrapperRef = useRef();

  const sendMessage = (text) => {
    addMessage(
      {
        author: AUTHORS.human,
        text,
        id: `msg-${Date.now()}`,
      },
      id
    );
  };

  useEffect(() => {
    const lastMessage = messages[id]?.[messages[id]?.length - 1];
    if (lastMessage?.author === AUTHORS.human) {
      timeout.current = setTimeout(() => {
        addMessage(
          {
            author: AUTHORS.robot,
            text: "hello friend",
            id: `msg-${Date.now()}`,
          },
          id
        );
      }, 1000);
    }

    return () => {
      clearTimeout(timeout.current);
    };
  }, [messages]);

  if (!messages[id]) {
    return <Navigate to="/chat" replace />;
  }

  return (
    <div ref={wrapperRef}>
      <MessageList messages={messages[id]} />
      <Form onSubmit={sendMessage} />
    </div>
  );
}
