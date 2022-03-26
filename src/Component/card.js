import React from "react";
import "./card.css";
import {
  FaEllipsisH,
  FaHeart,
  FaRetweet,
  FaCommentDots,
  FaShareAltSquare,
} from "react-icons/fa";
import { Card } from "@material-ui/core";

const Cards = () => {
  const styles = {
    "text-align": "center",
  };
  //   function like() {
  //     styles.color = "green";
  //   }
  function myName() {
    styles.color = "blue";
  }
  return (
    <>
      <Card style={{ margin: "5vh" }} className="card">
        <div className="prof">
          <img src="prof.jpg" alt="profimg" className="profimg"></img>
        </div>
        <div className="content">
          <div className="namediv">
            <div className="username">
              <a href="##">
                <b>Spidey</b> @not_peter{" "}
              </a>
            </div>
            <div className="time">3:30</div>
            <div className="more">
              <FaEllipsisH></FaEllipsisH>
            </div>
          </div>
          <div className="subcont">
            <div className="text">
              <p>I know right?</p>
            </div>
            <Card className="nestcard">
              <div className="nestprof">
                <img src="batman2.jpg" alt="profimg" className="profimg"></img>

                <div className="nestusername">
                  <a href="##">
                    <b>Bat</b> @Vengence_26{" "}
                  </a>
                </div>
                <div className="time">1:50pm</div>
              </div>
              <div className="content">
                <div className="subcont">
                  <div className="text">
                    <p>
                      I Wear A Mask. And That Mask, It’s Not To Hide Who I Am,
                      But To Create What I Am.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="cardfooter">
            <div className="like">
              <FaHeart style={styles} onMouseDown={myName}></FaHeart>
            </div>
            <div className="retweet">
              <FaRetweet style={styles} onMouseDown={myName}></FaRetweet>
            </div>
            <div className="comment">
              <FaCommentDots
                style={styles}
                onMouseDown={myName}
              ></FaCommentDots>
            </div>
            <div className="share">
              <FaShareAltSquare
                style={styles}
                onMouseDown={myName}
              ></FaShareAltSquare>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
export default Cards;
