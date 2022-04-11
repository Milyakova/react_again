import { Avatar } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
const mychats = [
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
export const ChatsList = () => (
  <div className="d-flex justify-content-around ">
    <div className="rounded-3 w-30">
      <ul class="list-group rounded-3">
        {mychats.map((chat) => (
          <Link to={`/chat/${chat.id}`} key={chat.id}>
            <li
              key={chat.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <Avatar alt="Remy Sharp" src="../img/LEGO.jpg" />
              {chat.name}
              <span class="badge bg-primary rounded-pill mx-4">
                {Math.ceil(Math.random() * 15)}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
    <Outlet />
  </div>
);
