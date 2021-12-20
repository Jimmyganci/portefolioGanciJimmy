import ImageProject from "../ImageProject";
import projects from "../../projects";
import TextProject from "../TextProject";
import { StyleSheet, css } from "aphrodite";
import { useState } from "react";

const Portefolio = () => {
  const [positionScroll, setPositionScroll] = useState(0);
  const [scrollDown, setScrollDown] = useState(false);
  const [countProjects, setCountProjects] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const styles = StyleSheet.create({
    yop: {
      ":before": {
        height: positionScroll + "px",
      },
    },
    widthMedia: {
      width: `${projects.length}00%`,
    },
    translateText: {
      transform: `translateX(-80%)`,
    },
  });

  const scroll = (e) => {
    if (e.deltaY > 0 && countProjects < projects.length - 1) {
      setCountProjects(countProjects + 1);
    } else if (countProjects > 0) {
      setCountProjects(countProjects - 1);
    } else {
      setScrollDown(false);
    }
  };

  const scrollMobil = (e) => {
	if(e.nativeEvent.changedTouches[0].clientY - touchStart !== 0 ){ 
		if (
		e.nativeEvent.changedTouches[0].clientY + 25 < touchStart &&
		countProjects < projects.length - 1
		) {
		setCountProjects(countProjects + 1);
		} else if (countProjects > 0) {
		setCountProjects(countProjects - 1);
		} else {
		setScrollDown(false);
		}
	}
  };

  return (
    <div
      className="portefolio"
      onWheel={(e) => {
        setPositionScroll(e.pageY - e.clientY * 2.3);
      }}
    >
      <div
        className={`portefolio__hero ${scrollDown && "scrollDown"}`}
        onWheel={(e) => e.deltaY > 0 && setScrollDown(true)}
        onTouchStart={(e) =>
          setTouchStart(e.nativeEvent.changedTouches[0].clientY)
        }
        onTouchEnd={(e) =>
          e.nativeEvent.changedTouches[0].clientY < touchStart &&
          setScrollDown(true)
        }
      >
        <div className="portefolio__hero--title">
          <h1>
            P<span>o</span>rtef<span>o</span>li<span>o</span>
          </h1>
        </div>
      </div>
      <div
        onWheel={(e) => scroll(e)}
        onTouchStart={(e) =>
          setTouchStart(e.nativeEvent.changedTouches[0].clientY)
        }
        onTouchEnd={(e) => scrollMobil(e)}
        className={`portefolio__containerProject ${scrollDown && "scrollDown"}`}
      >
        <div className={`portefolio__containerProject__flex`}>
          <span className="portefolio__containerProject__flex--count">
            0{countProjects + 1}
          </span>
          <div
            className={`portefolio__containerProject__flex--left ${
              window.innerWidth < 850 && css(styles.yop, styles.widthMedia)
            }`}
          >
            {projects
              .sort((a, b) => a.id - b.id)
              .map((project) => (
                <ImageProject
                  key={project.id}
                  projectsLength={projects.length}
                  position="left"
                  countProjects={countProjects}
                  projects={project}
                />
              ))}
          </div>
          <div
            className={`portefolio__containerProject__flex--right ${
              window.innerWidth < 850 &&
              css(styles.widthMedia, styles.translateText)
            }`}
          >
            {projects
              .sort((a, b) => b.id - a.id)
              .map((project) => (
                <TextProject
                  key={project.id}
                  projects={project}
                  countProjects={countProjects}
                  projectsLength={projects.length}
                />
              ))}
          </div>
        </div>
        <div className="portefolio__containerProject__flex--point">
          {projects
            .sort((a, b) => a.id - b.id)
            .map((project) => (
              <span
                onClick={() => setCountProjects(project.id - 1)}
                className={countProjects + 1 === project.id ? "redPoint" : ""}
                key={project.id}
              ></span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Portefolio;
