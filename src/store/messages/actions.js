export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const ADD_NEW_CHAT_MESSAGE = "MESSAGES::ADD_NEW_CHAT_MESSAGE";
export const DELETE_CHAT_WITH_MESSAGES = "MESSAGES::DELETE_CHAT_WITH_MESSAGES";
export const addNewMessage = (newMsg) => ({
  type: ADD_MESSAGE,
  payload: newMsg,
});

export const addNewChatMessage = (newChat) => ({
  type: ADD_NEW_CHAT_MESSAGE,
  payload: newChat,
});

export const deleteChatWithMessages = (id) => ({
  type: DELETE_CHAT_WITH_MESSAGES,
  payload: id,
});
