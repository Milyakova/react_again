import "./App.css";
import React, { useEffect, useState } from "react";
import { Message } from "./components/Message";

const messageList = [
  {
    text: "Отладка кода — это как охота. Охота на баги.",
    author: "Amit Kalantri",
  },
  {
    text: "Всегда пишите код так, будто сопровождать его будет склонный к насилию психопат, который знает, где вы живете.",
    author: "Martin Golding",
  },
  {
    text: "Если вы дадите человеку программу, то займете его на один день. Если вы научите человека программировать, то займете его на всю жизнь.",
    author: "Waseem Latif",
  },
];

const answersList = [
  {
    text: "You can never understand everything. But, you should push yourself to understand the system.",
    author: "Ryan Dahl (Creator of Node JS)",
  },

  {
    text: "Успех обычно приходит к тем, кто слишком занят, чтобы его просто ждать",
    author: "Henry David Thoreau",
  },

  {
    text: "Успех — это путь от неудачи к неудаче без потери энтузиазма",
    author: "Уинстон Черчилль",
  },
  {
    text: "Притворяйся, пока не получится! Делай вид, что ты настолько уверен в себе, насколько это необходимо, пока не обнаружишь, что так оно и есть",
    author: "Брайан Трейси",
  },
];

function App() {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (messages[messages.length - 1]?.author === "Вы: ") {
      setTimeout(() => {
        const randomNum = Math.floor(Math.random() * answersList.length);
        setMessages((prevMessages) => [
          ...prevMessages,
          answersList[randomNum],
        ]);
      }, 2000);
    }
  }, [messages]);

  const handleAddMessage = () => {
    if (messageList.length !== 0) {
      const addingMessage = messageList.shift();
      setMessages((prevMessages) => [...prevMessages, addingMessage]);
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: value, author: "Вы: " },
    ]);
  };

  return (
    <div className="App">
      <h1>Взбодриться</h1>
      {messages.map((message, i) => (
        <Message key={i} content={message} />
      ))}
      <button onClick={handleAddMessage} className="btn">
        Задать вопрос
      </button>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} className="input"></input>
        <input type="submit" value="Задать вопрос" className="btn"></input>
      </form>
    </div>
  );
}

export default App;
