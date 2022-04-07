import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import { Form } from "./components/Form/Form";
import { AUTHORS } from "./utils/constants";
import { MessageList } from "./components/MessageList/MessageList.jsx";
import { ChatsList } from "./components/ChatsList/ChatsList.jsx";
import { Home } from "./screens/Home";
import { Chat } from "./screens/Chat";
import { Profile } from "./components/Profile/Profile";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

function App() {
  const [messages, setMessages] = useState([]);

  const timeout = useRef();
  const wrapperRef = useRef();

  const addMessage = (newMsg) => {
    setMessages([...messages, newMsg]);
  };

  const sendMessage = (text) => {
    addMessage({
      author: AUTHORS.human,
      text,
      id: `msg-${Date.now()}`,
    });
  };

  useEffect(() => {
    if (messages[messages.length - 1]?.author === AUTHORS.human) {
      timeout.current = setTimeout(() => {
        addMessage({
          author: AUTHORS.robot,
          text: "hello friend",
          id: `msg-${Date.now()}`,
        });
      }, 1000);
    }

    return () => {
      clearTimeout(timeout.current);
    };
  }, [messages]);

  const handleScroll = () => {
    wrapperRef.current?.scrollTo({ x: 0, y: 0 });
  };

  return (
    <BrowserRouter>
      <div className="container my-5">
        <nav class="nav nav-pills flex-column w-25 p-3 ">
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

        {/* <div className="App my-5" ref={wrapperRef}>
        <div className="d-flex justify-content-around">
          <ItemsList />
          <div>
            <MessageList messages={messages} />
            <Form onSubmit={sendMessage} />
            <button className="btn btn-primary" onClick={handleScroll}>
              scroll
            </button>
          </div>
        </div>
      </div> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<ChatsList />}>
            <Route path=":id" element={<Chat />} />
          </Route>
          <Route path="*" element={<h4>404</h4>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
