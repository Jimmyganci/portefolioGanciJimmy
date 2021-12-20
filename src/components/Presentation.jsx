import React, { useRef } from "react";
import UseElementOnScreen from "../components/hooks/UseElementOnScreen";

const Presentation = () => {
  const targetRef = useRef(null);
  const isVisible = UseElementOnScreen(
    {
      root: null,
      rootMargin: "0px",
      treshold: 0.6,
    },
    targetRef
  );
  return (
    <div className="presentation">
      <h2 className="titleCategoryHome">
        A propo<span>s</span>
      </h2>
      <div className="presentation__flex">
        <div className="presentation__flex--left">
          <div></div>
        </div>
        <div ref={targetRef} className="presentation__flex--right">
          <h2>Qui suis-je</h2>
          <p className={isVisible ? "show" : ""}>
            Militaire en reconversion professionnelle, c'est vers le
            développement web que mon interêt c'est porté.
          </p>
          <p className={isVisible ? "show" : ""}>
            Autodidacte, j'ai pu me former grâce à la réalisation de deux
            projets personnels.
          </p>
          <p className={isVisible ? "show" : ""}>
            Curieux et passioné, j'ai entrepris une formation à la Wild Code
            School, période durant laquelle j'ai pu continuer à réaliser des
            projets, seul ou en groupe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
