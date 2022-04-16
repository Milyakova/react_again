import { ADD_CHAT, DELETE_CHAT } from "./actions";

// const initialState = [
//   {
//     name: "Anna",
//     id: "chat1",
//   },
//   {
//     name: "George",
//     id: "chat2",
//   },
//   {
//     name: "Sheldon",
//     id: "chat3",
//   },
// ];

export const chatsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CHAT:
      return [...state, payload];

    case DELETE_CHAT:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};
