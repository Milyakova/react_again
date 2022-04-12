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
  const [theme, setTheme] = useState("dark");

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={theme}>
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
                <Route path="/chat" element={<ChatsList />}>
                  <Route path=":id" element={<Chat />} />
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
