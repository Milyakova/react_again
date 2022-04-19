import { AUTHORS } from "../../utils/constants";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const ADD_NEW_CHAT_MESSAGE = "MESSAGES::ADD_NEW_CHAT_MESSAGE";
export const DELETE_CHAT_WITH_MESSAGES = "MESSAGES::DELETE_CHAT_WITH_MESSAGES";

export const addNewMessage = (newMsg, chatId) => ({
  type: ADD_MESSAGE,
  payload: { newMsg, chatId },
});

export const addNewChatMessage = (newChat) => ({
  type: ADD_NEW_CHAT_MESSAGE,
  payload: newChat,
});

export const deleteChatWithMessages = (id) => ({
  type: DELETE_CHAT_WITH_MESSAGES,
  payload: id,
});
let timeout;

export const addMessageWithReply = (newMsg, chatId) => (dispatch, getState) => {
  const state = getState();
  console.log(state);
  dispatch(addNewMessage(newMsg, chatId));
  if (newMsg?.author === AUTHORS.human) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      dispatch(
        addNewMessage(
          {
            author: AUTHORS.robot,
            text: "hello friend",
            id: `msg-${Date.now()}`,
          },
          chatId
        )
      );
    }, 1000);
  }
};
