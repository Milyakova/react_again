import "./App.css";
import React, { useState } from "react";
import { ChatsList } from "./components/ChatsList/ChatsList.jsx";
import { Home } from "./screens/Home";
import { Chat } from "./screens/Chat";
import { Profile } from "./components/Profile/Profile";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Provider, shallowEqual, useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import { ThemeContext } from "./utils/ThemeContext";
import { AiFillHome } from "react-icons/ai";
import { BsFillChatTextFill, BsPersonFill } from "react-icons/bs";
import { addChat, deleteChat } from "./store/chats/actions";
import { selectChats } from "./store/chats/selectors";
import {
  addNewChatMessage,
  addNewMessage,
  deleteChatWithMessages,
} from "./store/messages/actions";
import { selectMessages } from "./store/messages/selectors";

function App() {
  const chats = useSelector(selectChats, shallowEqual);
  const dispatch = useDispatch();
  const messages = useSelector(selectMessages, shallowEqual);

  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  const addMessage = (newMsg, id) => {
    dispatch(addNewMessage({ newMsg, id }));
  };
  const addNewChat = (newChat) => {
    dispatch(addChat(newChat));
    dispatch(addNewChatMessage(newChat));
  };
  const removeChat = (id) => {
    dispatch(deleteChat(id));
    dispatch(deleteChatWithMessages(id));
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme: toggleTheme }}>
      <BrowserRouter>
        <div className="container">
          <div className="bord my-5 ">
            <nav class="nav nav-pills p-3  nav-fill ">
              <NavLink className="nav-link" to="/">
                <AiFillHome /> Home
              </NavLink>
              <NavLink className="nav-link" to="/profile">
                <BsPersonFill /> Profile
              </NavLink>
              <NavLink className="nav-link" to="/chat">
                <BsFillChatTextFill /> Chat
              </NavLink>
            </nav>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/chat"
                element={
                  <ChatsList
                    chats={chats}
                    addChat={addNewChat}
                    deleteChat={removeChat}
                  />
                }
              >
                <Route
                  path=":id"
                  element={<Chat addMessage={addMessage} messages={messages} />}
                />
              </Route>
              <Route path="*" element={<h4>404</h4>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
