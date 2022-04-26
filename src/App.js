import "./App.css";
import React, { useState } from "react";
import { ChatsListContainer } from "./components/ChatsList/ChatsListContainer.jsx";
import { Home } from "./screens/Home";
import { Chat } from "./screens/Chat";
import { Profile } from "./components/Profile/Profile";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { ThemeContext } from "./utils/ThemeContext";
import { AiFillHome } from "react-icons/ai";
import { BsFillChatTextFill, BsPersonFill, BsBookFill } from "react-icons/bs";
import { Articles } from "./screens/Articles/Articles";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const [authed, setAuthed] = useState(false);
  const handleLogin = () => {
    setAuthed(true);
  };
  const handleLogout = () => {
    setAuthed(false);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme: toggleTheme }}>
      <BrowserRouter>
        <div className="container">
          <div className="bord">
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
              <NavLink className="nav-link" to="/articles">
                <BsBookFill /> Articles
              </NavLink>
            </nav>

            <Routes>
              <Route path="/" element={<PublicRoute authed={authed} />}>
                <Route path="" element={<Home onAuth={handleLogin} />} />
              </Route>

              <Route path="/profile" element={<PrivateRoute authed={authed} />}>
                <Route path="" element={<Profile onLogout={handleLogout} />} />
              </Route>

              <Route path="/chat" element={<ChatsListContainer />}>
                <Route path=":id" element={<Chat />} />
              </Route>
              <Route path="/articles" element={<Articles />} />
              <Route path="*" element={<h4>404</h4>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
