import React from "react";
import {
  FaEllipsisH,
  FaHeart,
  FaRetweet,
  FaCommentDots,
  FaShareAltSquare,
} from "react-icons/fa";
import { Box, Card } from "@mui/material";

const Cards = () => {
  const styles = {
    textAlign: "center",
  };
  function myName() {
    styles.color = "blue";
  }
  return (
    <Card className="card" sx={{ mb: "12px", py: "8px" }}>
      <div className="prof">
        <img
          src="https://avatars.githubusercontent.com/u/38307844?v=4"
          alt="profimg"
          className="profimg"
        />
      </div>
      <div className="content">
        <div className="namediv">
          <div className="username">
            <a href="##">
              <b>Spidey</b> @not_peter
            </a>
          </div>
          <div className="time">3:30</div>
          <div className="more">
            <FaEllipsisH />
          </div>
        </div>
        <div className="subcont">
          <div className="text">
            <p>I know right?</p>
          </div>
          <Card className="nestcard" sx={{ mt: "16px" }}>
            <Box className="nestprof" sx={{ p: "8px" }}>
              <img
                src="https://avatars.githubusercontent.com/u/38307844?v=4"
                alt="profimg"
                className="profimg"
              />
              <div className="nestusername">
                <a href="##">
                  <b>Deepak</b> @dasjideepak
                </a>
              </div>
              <div className="time">1:50PM</div>
            </Box>
            <div className="content">
              <div className="subcont">
                <div className="text">
                  <p>
                    I Wear A Mask. And That Mask, It’s Not To Hide Who I Am, But
                    To Create What I Am.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="cardfooter">
          <div className="like">
            <FaHeart style={styles} onMouseDown={myName} />
          </div>
          <div className="retweet">
            <FaRetweet style={styles} onMouseDown={myName} />
          </div>
          <div className="comment">
            <FaCommentDots style={styles} onMouseDown={myName} />
          </div>
          <div className="share">
            <FaShareAltSquare style={styles} onMouseDown={myName} />
          </div>
        </div>
      </div>
    </Card>
  );
};
export default Cards;
