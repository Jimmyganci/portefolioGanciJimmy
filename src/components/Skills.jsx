import React, { useEffect, useRef, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import UseElementOnScreen from "../components/hooks/UseElementOnScreen";

const Skills = ({ scrollAgain }) => {
  const [frontCount, setFrontCount] = useState(0);
  const [backCount, setBackCount] = useState(0);

  const targetRef = useRef(null);
  const isVisible = UseElementOnScreen(
    {
      root: null,
      rootMargin: "0px",
      treshold: 0.6,
    },
    targetRef
  );

  useEffect(() => {
    if (scrollAgain) {
      let front = setInterval(() => {
        frontCount < 50 && setFrontCount(frontCount + 1);
      }, 40);
      let back = setInterval(() => {
        backCount < 50 && setBackCount(backCount + 1);
      }, 40);
      return () => {
        clearInterval(front);
        clearInterval(back);
      };
    } else {
      setTimeout(() => {
        setFrontCount(0);
        setBackCount(0);
      }, 1500);
    }
  });

  return (
    <div className="skills">
      <h2 className="titleCategoryHome">
        Sk<span>i</span>lls
      </h2>
      <div ref={targetRef} className="skills__containerProgress">
        <div ref={targetRef} className="skills__containerProgress--left">
          <div
            className={isVisible ? "show" : ""}
            id="progressCircle"
            style={{ width: 200, height: 200 }}
          >
            <p>Front</p>
            <CircularProgressbar
              value={frontCount}
              text={`${frontCount}%`}
              styles={{
                trail: {
                  stroke: "none",
                },
                path: {
                  // Path color
                  stroke: `rgb(145,0,0)`,
                  strokeWidth: 2,
                },
                text: {
                  fill: "white",
                },
              }}
            />
          </div>
        </div>
        <div className="skills__containerProgress--right">
          <div
            className={isVisible ? "show" : ""}
            id="progressCircle"
            style={{ width: 200, height: 200 }}
          >
            <p>Back</p>
            <CircularProgressbar
              value={backCount}
              text={`${backCount}%`}
              styles={{
                trail: {
                  stroke: "none",
                },
                path: {
                  // Path color
                  stroke: `rgb(145,0,0)`,
                  strokeWidth: 2,
                },
                text: {
                  fill: "white",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
