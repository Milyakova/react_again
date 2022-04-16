import { BsFillTrashFill } from "react-icons/bs";
import { Avatar } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import avatar from "../../img/LEGO.jpg";
import { Form } from "../Form/Form";

export const ChatsList = ({ chats, addChat, deleteChat }) => {
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
        <div className=" w-30">
          <ul class="list-group mb-3">
            {chats.map((chat) => (
              <div key={chat.id}>
                <div className="d-flex justify-content-between">
                  <Link to={`/chat/${chat.id}`} key={chat.id} className="w-100">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <Avatar alt="Remy Sharp" src={avatar} />
                      {chat.name}
                      <span class="badge bg-primary rounded-pill mx-4">
                        {Math.ceil(Math.random() * 15)}
                      </span>
                    </li>
                  </Link>

                  <button
                    onClick={() => deleteChat(chat.id)}
                    type="button"
                    class="btn btn-danger"
                  >
                    <BsFillTrashFill />
                  </button>
                </div>
              </div>
            ))}
          </ul>
          <Form className="m-3" onSubmit={handleSubmit} buttonName="Add chat" />
        </div>

        <Outlet />
      </div>
    </>
  );
};
