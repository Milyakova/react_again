import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

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
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {mychats.map((chat) => {
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={chat.name} src="../../img" />
          </ListItemAvatar>
        </ListItem>;
      })}
    </List>
  );
}
