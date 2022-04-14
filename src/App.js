import "./App.css";
import React, { useState } from "react";
import { ChatsList } from "./components/ChatsList/ChatsList.jsx";
import { Home } from "./screens/Home";
import { Chat } from "./screens/Chat";
import { Profile } from "./components/Profile/Profile";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeContext } from "./utils/ThemeContext";

function App() {
  const initialChats = [
    {
      name: "Anna",
      id: "chat1",
    },
    {
      name: "George",
      id: "chat2",
    },
    {
      name: "Sheldon",
      id: "chat3",
    },
  ];
  const initialMessage = initialChats.reduce((acc, chat) => {
    acc[chat.id] = [];
    return acc;
  });
  const [chats, setChats] = useState(initialChats);
  const [messages, setMessages] = useState(initialMessage);
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  const addMessage = (newMsg, id) => {
    setMessages({ ...messages, [id]: [...messages[id], newMsg] });
  };
  const addChat = (newChat) => {
    setChats((prevChats) => [...prevChats, newChat]);
  };
  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ theme, changeTheme: toggleTheme }}>
        <BrowserRouter>
          <div className="container">
            <div className="bord my-5 ">
              <nav class="nav nav-pills p-3  nav-fill ">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/profile">
                  Profile
                </NavLink>
                <NavLink className="nav-link" to="/chat">
                  Chat
                </NavLink>
              </nav>

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route
                  path="/chat"
                  element={<ChatsList chats={chats} addChat={addChat} />}
                >
                  <Route
                    path=":id"
                    element={
                      <Chat messages={messages} addMessage={addMessage} />
                    }
                  />
                </Route>
                <Route path="*" element={<h4>404</h4>} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
