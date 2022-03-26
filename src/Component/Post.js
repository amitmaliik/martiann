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
              src="shorturl.at/quFQ2"
            ></Avatar>
            Nilesh Dhulshette
          </div>
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://timelinecovers.pro/facebook-cover/download/batman-looking-at-your-wall-facebook-cover.jpg"
            alt="img"
          />
        </CardContent>
      </Card>
    </div>
  );
};
