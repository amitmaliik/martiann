import { Box, Typography } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
import { Post } from "./Post";
import { Opensea } from "./Opensea";

export const Profiles = () => {
  return (
    <div>
      <div className="profile">
        <Box sx={{ textAlign: "center" }}>
          About this is every thing about me and any thing you might want to
          know
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            m: "16px",
          }}
        >
          <Grid container lg={8}>
            {/* <Grid item xs={8}>
              {seefollower ? (
                <Follower style={{ margin: "30px", zindex: 1 }} />
              ) : null}
            </Grid> */}
            <Grid item xs={12}>
              <Post />
            </Grid>
          </Grid>
          <Grid container lg={4} sx={{ m: "16px" }}>
            <Typography sx={{ fontFamily: "sans-serif", fontSize: "16px" }}>
              Opensea Collection
            </Typography>
            <Opensea />
          </Grid>
        </Box>
      </div>
    </div>
  );
};
