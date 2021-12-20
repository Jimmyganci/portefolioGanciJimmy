import { StyleSheet, css } from "aphrodite";
import { useRef } from "react";
import UseElementOnScreen from "../components/hooks/UseElementOnScreen";

const ImageProject = ({
  position,
  countProjects,
  projectsLength,
  projects,
}) => {
  const targetRef = useRef(null);
  const isVisible = UseElementOnScreen(
    {
      root: null,
      rootMargin: "0px",
      treshold: 0.9,
    },
    targetRef
  );

  const styles = StyleSheet.create({
    scroll: {
      transform: `translateY(-${countProjects}00vh)`,
      "@media (max-width: 850px)": {
        transform: `translate(-${countProjects}00%, 0)`,
      },
    },
  });

  return (
    <div
      className={`imageProject ${
        countProjects <= projectsLength && css(styles.scroll)
      } ${isVisible && window.innerWidth >= 850 && "noOpacity"}`}
    >
      <div className="imageProject__title">
        <h2 className="titleCategoryHome">
          {projects.title.slice(0, projects.title.length - 1)}
          {<span>{projects.title[projects.title.length - 1]}</span>}
        </h2>
      </div>
      <a
        className={`test ${
          position === "left" ? "hiddenLeft" : "hiddenRight"
        } ${isVisible && "show"}`}
        href={projects.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="imageProject__image">
          <img src={projects.image} alt="projet_ganci" />
        </div>
        <div
          className={`test imageProject__techno ${
            position === "left" ? "hiddenLeft" : "hiddenRight"
          } ${isVisible && "show"}`}
        >
          {projects.techno.map((tec, index) => {
            const translateKeyframes = {
              from: {
                width: 0,
              },

              to: {
                width: `${tec.skill}%`,
              },
            };
            const styles = StyleSheet.create({
              animBar: {
                ":before": {
                  animationName: [translateKeyframes],
                  animationDuration: "3s, 1200ms",
                  animationFillMode: "both",
                },
              },
            });
            return (
              <div
                ref={targetRef}
                key={index}
                className="imageProject__techno--skills"
              >
                <p>{tec.language}</p>
                <span
                  className={`progress ${isVisible && css(styles.animBar)}`}
                ></span>
              </div>
            );
          })}
        </div>
      </a>
    </div>
  );
};

export default ImageProject;
