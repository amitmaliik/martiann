import React from "react";
import { Avatar, Card, CardContent, IconButton } from "@mui/material";
import martiann from "../assets/martiann.svg";
import search from "../assets/search.svg";
import noti from "../assets/notify.svg";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <Card>
      <CardContent>
        {/* logo */}
        <img
          onClick={() => navigate("/", { replace: true })}
          style={{}}
          src={martiann}
          alt="img"
        />
        {/* search bar */}
        <input
          style={{ padding: "10px", margin: "12px", width: "300px" }}
          id="outlined"
          type="text"
          label=""
        />
        {/* search icon */}
        <IconButton
          style={{
            backgroundColor: "#11111",
          }}
        >
          <Avatar
            style={{ width: "24px", height: "24px" }}
            onClick={() => navigate("/search", { replace: true })}
            src={search}
          />
        </IconButton>
        {/* notification icon*/}
        <IconButton
          style={{
            backgroundColor: "#11111",
            position: "relative",
            right: "-50vw",
          }}
        >
          <Avatar
            style={{ width: "24px", height: "24px" }}
            onClick={() => navigate("/notification", { replace: true })}
            src={noti}
          ></Avatar>
        </IconButton>
        {/* profile */}
        <IconButton
          style={{
            backgroundColor: "#11111",
            position: "relative",
            right: "-52vw",
          }}
        >
          <Avatar
            onClick={() => navigate("/profile", { replace: true })}
            style={{ width: "44px", height: "44px" }}
            src="https://avatars.githubusercontent.com/u/38307844?v=4"
          ></Avatar>
        </IconButton>
      </CardContent>
    </Card>
  );
};
