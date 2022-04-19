import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectChats } from "../../store/chats/selectors";
import { addChat, deleteChat } from "../../store/chats/actions";
import {
  addNewChatMessage,
  deleteChatWithMessages,
} from "../../store/messages/actions";
import { ChatListDummy } from "./ChatListDummy";

export const ChatsListContainer = () => {
  const chats = useSelector(selectChats);
  const dispatch = useDispatch();

  const handleSubmit = (chatName) => {
    const newChat = {
      name: chatName,
      id: `chat-${Date.now()}`,
    };
    dispatch(addChat(newChat));
    dispatch(addNewChatMessage(newChat));
  };
  const handleRemoveChat = (id) => {
    dispatch(deleteChat(id));
    dispatch(deleteChatWithMessages(id));
  };

  return (
    <ChatListDummy
      chats={chats}
      handleRemoveChat={handleRemoveChat}
      handleSubmit={handleSubmit}
    />
  );
};
