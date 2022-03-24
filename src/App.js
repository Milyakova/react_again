import "./App.css";
import React from "react";
import { Message } from "./components/Message.jsx";
import { MessageClass } from "./components/Message.jsx";

function App() {
  return (
    <div className="App">
      <Message name="Функциональный" bold={true} />
      <hr />
      <MessageClass name="Классовый" bold={true} />
    </div>
  );
}

export default App;
