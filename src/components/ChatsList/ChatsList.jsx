import { Avatar } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import avatar from "../../img/LEGO.jpg";
import { Form } from "../Form/Form";

export const ChatsList = ({ chats, addChat }) => {
  const handleSubmit = (chatName) => {
    const newChat = {
      name: chatName,
      id: `chat-${Date.now()}`,
    };
    addChat(newChat);
  };
  return (
    <>
      <div className="d-flex justify-content-around ">
        <div className="rounded-3 w-30">
          <ul class="list-group rounded-3">
            {chats.map((chat) => (
              <Link to={`/chat/${chat.id}`} key={chat.id}>
                <li
                  key={chat.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <Avatar alt="Remy Sharp" src={avatar} />
                  {chat.name}
                  <span class="badge bg-primary rounded-pill mx-4">
                    {Math.ceil(Math.random() * 15)}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <Form onSubmit={handleSubmit} />
        <Outlet />
      </div>
    </>
  );
};
