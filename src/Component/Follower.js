import {
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import nile from "../assets/nil.jpg";
export const Follower = () => {
  const followers = [
    { name: "Deepak", src: { nile } },
    { name: "Omkar", src: { nile } },
    { name: "Ashutosh", src: { nile } },
    { name: "Shiv", src: { nile } },
  ];
  return (
    <div>
      <List style={{ backgroundColor: "white", color: "black" }}>
        {followers.map((text, index) => (
          <ListItem
            style={{ margin: "10px", padding: "10px" }}
            button
            key={text}
          >
            <ListItemIcon>
              <Avatar src={text.src}></Avatar>
            </ListItemIcon>
            <ListItemText primary={text.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
