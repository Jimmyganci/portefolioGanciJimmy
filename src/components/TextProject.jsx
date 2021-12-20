import React, { useRef } from "react";
import UseElementOnScreen from "../components/hooks/UseElementOnScreen";
import { StyleSheet, css } from "aphrodite";
import status from "../assets/status.png";
import check from "../assets/check.png";
import difficult from "../assets/difficult.png";
import description from "../assets/description.png";

const TextProject = ({ projects, position, countProjects, projectsLength }) => {
  const targetRef = useRef(null);
  const isVisible = UseElementOnScreen(
    {
      root: null,
      rootMargin: "0px",
      treshold: 0.6,
    },
    targetRef
  );

  const styles = StyleSheet.create({
    scroll: {
      transform: `translateY(${countProjects}00vh)`,
      "@media (max-width: 850px)": {
        transform: `translate(${countProjects}00%, 0)`,
      },
    },
  });

  return (
    <div
      className={`textProject ${
        countProjects <= projectsLength && css(styles.scroll)
      } ${isVisible && window.innerWidth >= 850 && "noOpacity"}`}
    >
      <div
        className={`test ${
          position === "left" ? "hiddenLeft" : "hiddenRight"
        } ${isVisible && "show"}`}
      >
        <div className="textProject__container">
          <div className="textProject__container--flex">
            <span>
              <img src={check} alt="checked" />
            </span>
            <p>{projects.mastered}</p>
          </div>
          <div className="textProject__container--flex">
            <span ref={targetRef}>
              <img src={status} alt="status" />
            </span>

            <p>{projects.status}</p>
          </div>
          <div className="textProject__container--flex">
            <span>
              <img src={difficult} alt="difficulties" />
            </span>
            <p>{projects.difficulty}</p>
          </div>
        </div>
        <div className="textProject__container--flex" id="withDesc">
          <span>
            <img src={description} alt="description" />
          </span>
          <p>{projects.text}</p>
        </div>
      </div>
      <p className="textProject__date--left">{projects.date}</p>
    </div>
  );
};

export default TextProject;
