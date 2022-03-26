import { AppBar, Box, CssBaseline, Drawer } from "@material-ui/core";
import { Avatar } from "@mui/material";
import React from "react";
import nile from "../assets/nil.jpg";
import { Profiles } from "./Profiles";

export const Profile = () => {
  const drawerWidth = 240;
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          paddingTop: "22px",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Avatar
          style={{
            width: "120px",
            height: "120px",
            position: "relative",
          }}
          sx={{ width: 56, height: 56 }}
          src={nile}
        ></Avatar>
        <div
          style={{
            display: "flex",
            padding: "10px",
          }}
        >
          <h4
            style={{
              margin: "10px",
              color: "red",
            }}
          >
            10
          </h4>
          <h4
            style={{
              margin: "10px",
              color: "black",
            }}
          >
            follower
          </h4>
          <h4
            style={{
              margin: "10px",
              color: "red",
            }}
          >
            10
          </h4>
          <h4
            style={{
              margin: "10px",
              color: "black",
            }}
          >
            following
          </h4>
          <h4
            style={{
              margin: "10px",
              color: "red",
            }}
          >
            10
          </h4>
          <h4
            style={{
              margin: "10px",
              color: "black",
            }}
          >
            post
          </h4>
        </div>
      </Box>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: "20vw",
            ml: `${drawerWidth}px`,
          }}
        ></AppBar>
        <Drawer
          sx={{
            width: drawerWidth * 2,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="right"
        ></Drawer>
      </Box>
      <Profiles />
    </div>
  );
};
