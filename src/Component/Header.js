import React from "react";
import { Avatar, Box, Card, CardContent, IconButton } from "@mui/material";
import martiann from "../assets/martiann.svg";
import noti from "../assets/notify.svg";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  
  return (
    <Card>
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* logo */}
        <img
          onClick={() => navigate("/", { replace: true })}
          style={{}}
          src={martiann}
          alt="img"
        />
        <Box sx={{ display: "flex" }}>
          {/* notification icon*/}
          <IconButton
            style={{
              backgroundColor: "#11111",
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
            }}
          >
            <Avatar
              onClick={() => navigate("/profile", { replace: true })}
              style={{ width: "44px", height: "44px" }}
              src="https://avatars.githubusercontent.com/u/38307844?v=4"
            ></Avatar>
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};
