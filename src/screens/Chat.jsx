import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Navigate } from "react-router";

import { Form } from "../components/Form/Form";
import { MessageList } from "../components/MessageList/MessageList";
import { addMessageWithReply, addNewMessage } from "../store/messages/actions";

import {
  selectMessages,
  selectMessagesByChatId,
} from "../store/messages/selectors";
import { AUTHORS } from "../utils/constants";
import "./Chat.css";

export function Chat() {
  const { id } = useParams();
  const getMessages = useMemo(() => selectMessagesByChatId(id), [id]); //useMemo выполнит коллбэк и вернет рез-т в переменную запомнит эту ссылку
  //запомнит эту ссылку и будет ее перевычислять только если изменится что-то в его массиве зависимостей
  const messages = useSelector(getMessages);
  const timeout = useRef();
  const wrapperRef = useRef();
  const dispatch = useDispatch();

  const sendMessage = (text) => {
    dispatch(
      addMessageWithReply(
        {
          author: AUTHORS.human,
          text,
          id: `msg-${Date.now()}`,
        },
        id
      )
    );
  };

  // useEffect(() => {
  //   const lastMessage = messages?.[messages?.length - 1];
  //   if (lastMessage?.author === AUTHORS.human) {
  //     timeout.current = setTimeout(() => {
  //       dispatch(
  //         addNewMessage(
  //           {
  //             author: AUTHORS.robot,
  //             text: "hello friend",
  //             id: `msg-${Date.now()}`,
  //           },
  //           id
  //         )
  //       );
  //     }, 1000);
  //   }

  //   return () => {
  //     clearTimeout(timeout.current);
  //   };
  // }, [messages]);

  if (!messages) {
    return <Navigate to="/chat" replace />;
  }

  return (
    <div className="mw-75" ref={wrapperRef}>
      <MessageList messages={messages} />
      <Form onSubmit={sendMessage} buttonName="submit" className="m-3" />
    </div>
  );
}
