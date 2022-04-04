import React from "react";

export default function ItemsList() {
  const mychats = [
    {
      id: "643hi5",
      name: "Anna",
    },
    {
      id: "782jd673",
      name: "Oleg",
    },
    {
      id: "438yrhf",
      name: "Jenna",
    },
  ];

  return (
    <ul class="list-group">
      {mychats.map((chat) => (
        <li
          key={chat.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {chat.name}
          <span class="badge bg-primary rounded-pill mx-4">
            {Math.ceil(Math.random() * 15)}
          </span>
        </li>
      ))}
    </ul>
  );
}
