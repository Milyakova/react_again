import "./App.css";
import React, { useState } from "react";
import { ChatsListContainer } from "./components/ChatsList/ChatsListContainer.jsx";
import { Home } from "./screens/Home";
import { Chat } from "./screens/Chat";
import { Profile } from "./components/Profile/Profile";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { ThemeContext } from "./utils/ThemeContext";
import { AiFillHome } from "react-icons/ai";
import { BsFillChatTextFill, BsPersonFill } from "react-icons/bs";

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
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
              <Route path="/chat" element={<ChatsListContainer />}>
                <Route path=":id" element={<Chat />} />
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
