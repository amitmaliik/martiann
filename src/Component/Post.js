import React from "react";
import { Card } from "@mui/material";
import { Avatar, CardContent } from "@material-ui/core";
export const Post = () => {
  return (
    <div className="post">
      <Card style={{ marginLeft: "140px", marginTop: "52px" }}>
        <CardContent
          style={{
            color: "red",
          }}
          ClassName="cards"
        >
          <div style={{ display: "flex" }}>
            <Avatar
              style={{
                width: "20px",
                height: "20px",
                color: "red",
                marginRight: "6px",
                marginBottom: "8px",
              }}
              src="https://avatars.githubusercontent.com/u/38307844?v=4"
            ></Avatar>
            Nilesh Dhulshette
          </div>
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://avatars.githubusercontent.com/u/38307844?v=4"
            alt="img"
          />
        </CardContent>
      </Card>
    </div>
  );
};
