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
          <Link style={{ padding: "4px 0" }} to="/">
            Home
          </Link>
          <Link style={{ padding: "4px 0" }} to="/explore">
            Explore
          </Link>
          <Link style={{ padding: "4px 0" }} to="/more">
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
          <h3 className="mname">Models</h3>
          <Card className="m1">
            <p style={{ padding: "0 10px" }}>
              <b>Model1</b>
            </p>
            <div className="m">
              <div>Reccomand Popular Posts Loved by users</div>
              <div>
                <Switch defaultChecked size="small" />
              </div>
            </div>
          </Card>
          <Card style={{ backgroundColor: "#F8F7FB" }} className="m1">
            <p style={{ padding: "0 10px" }}>
              <b>Model2</b>
            </p>
            <div className="m">
              <div>Reccomand Popular Posts Loved by users</div>
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
