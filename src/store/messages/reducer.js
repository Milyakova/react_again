import {
  ADD_MESSAGE,
  ADD_NEW_CHAT_MESSAGE,
  DELETE_CHAT_WITH_MESSAGES,
} from "./actions";

// const store = useStore();
// const initialState = store.chats.reduce((acc, chat) => {
//   acc[chat.id] = [];
//   return acc;
// }, {}); //{"9876ftr66":[],"98546d":[],"786ddr":[]}

export const messagesReducer = (
  state = { "9876ftr66": [], "98546d": [], "786ddr": [] },
  { type, payload }
) => {
  switch (type) {
    case ADD_MESSAGE:
      return {
        ...state,
        [payload.chatId]: [...state[payload.chatId], payload.newMsg],
      };

    case ADD_NEW_CHAT_MESSAGE:
      console.log("DD_NEW_CHAT_MESSAGE ", {
        ...state,
        [payload.id]: [],
      });
      return { ...state, [payload.id]: [] };

    case DELETE_CHAT_WITH_MESSAGES:
      const newMessages = { ...state };
      delete newMessages[payload.id];
      return newMessages;

    default:
      return state;
  }
};
