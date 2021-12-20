import { useState } from "react";
import HeroHeader from "../HeroHeader";
import Presentation from "../Presentation";
import Skills from "../Skills";

const Home = () => {
  const [scrollDown, setScrollDown] = useState(false);
  const [scrollAgain, setScrollAgain] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  return (
    <div className="home">
      <div
        onWheel={(e) => {
          e.deltaY > 0 && setScrollDown(true);
        }}
        onTouchStart={(e) =>
          setTouchStart(e.nativeEvent.changedTouches[0].clientY)
        }
        onTouchEnd={(e) =>
          e.nativeEvent.changedTouches[0].clientY < touchStart &&
          setScrollDown(true)
        }
        className={`heroHeaderContainer ${scrollDown ? "scrollDown" : ""} ${
          scrollAgain ? "scrollAgain" : ""
        }`}
      >
        <HeroHeader />
      </div>
      <div
        onWheel={(e) => {
          e.deltaY > 0 ? setScrollAgain(true) : setScrollAgain(false);
          setScrollDown(false);
        }}
        onTouchStart={(e) =>
          setTouchStart(e.nativeEvent.changedTouches[0].clientY)
        }
        onTouchEnd={(e) => {
          e.nativeEvent.changedTouches[0].clientY < touchStart
            ? setScrollAgain(true)
            : setScrollAgain(false);
          setScrollDown(false);
        }}
        className={`presentationContainer ${scrollDown ? "scrollDown" : ""} ${
          scrollAgain ? "scrollAgain" : ""
        }`}
      >
        <Presentation />
      </div>
      <div
        onWheel={(e) => {
          e.deltaY < 0 && setScrollAgain(false);
          setScrollDown(true);
        }}
        onTouchStart={(e) =>
          setTouchStart(e.nativeEvent.changedTouches[0].clientY)
        }
        onTouchEnd={(e) => {
          e.nativeEvent.changedTouches[0].clientY > touchStart &&
            setScrollAgain(false);
          setScrollDown(true);
        }}
        className={`skillsContainer ${scrollDown ? "scrollDown" : ""} ${
          scrollAgain ? "scrollAgain" : ""
        }`}
      >
        <Skills scrollAgain={scrollAgain} />
      </div>
    </div>
  );
};

export default Home;
