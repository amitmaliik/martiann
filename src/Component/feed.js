import React from "react";
import "./main.css";
import Cards from "./Card";
import { Card, Switch } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Feed = () => {
  return (
    <div className="parent">
      <div className="sidebar">
        <Box className="menu" sx={{ display: "flex", flexDirection: "column" }}>
          <Link style={{ padding: "12px 0", fontSize: "18px" }} to="/">
            Home
          </Link>
          <Link style={{ padding: "12px 0", fontSize: "18px" }} to="/explore">
            Explore
          </Link>
          <Link style={{ padding: "12px 0", fontSize: "18px" }} to="/more">
            More
          </Link>
        </Box>
      </div>
      <div className="mid">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className="rside">
        <Card className="model">
          <h3 className="mname">Recommendation Algorthims</h3>
          <Card className="m1">
            <p style={{ padding: "0 10px" }}>
              <b>Algorthim 1</b>
            </p>
            <div className="m">
              <div>Reccomand user & content by cosine similarity</div>
              <div>
                <Switch defaultChecked size="small" />
              </div>
            </div>
          </Card>
          <Card style={{ backgroundColor: "#F8F7FB" }} className="m1">
            <p style={{ padding: "0 10px" }}>
              <b>Algorthim 2</b>
            </p>
            <div className="m">
              <div>Reccomand user & content by embeddings based </div>
              <div>
                <Switch size="small" />
              </div>
            </div>
          </Card>
        </Card>
      </div>
    </div>
  );
};
export default Feed;
