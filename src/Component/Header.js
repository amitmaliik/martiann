import React from "react";
import { Avatar, Card, CardContent, IconButton } from "@mui/material";
import martiann from "../assets/martiann.svg";
import search from "../assets/search.svg";
import noti from "../assets/notify.svg";
import nile from "../assets/nil.jpg";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Card>
        <CardContent>
          {/* logo */}
          <img style={{}} src={martiann} alt="img" />
          {/* search bar */}
          <input
            style={{ padding: "10px", margin: "20px", width: "300px" }}
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
              style={{ width: "3vw", height: "6vh" }}
              sx={{ height: "10vh", width: "10vw" }}
              src={nile}
            ></Avatar>
          </IconButton>
        </CardContent>
      </Card>
    </div>
  );
};
