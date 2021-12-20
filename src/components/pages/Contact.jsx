import React, { useRef, useState } from "react";
import CV from "../../assets/cv.pdf";
import cvImage from "../../assets/cv.png";
import phone from "../../assets/phone.png";
import mail from "../../assets/email.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import axios from "axios";
import UseElementOnScreen from "../hooks/UseElementOnScreen";

const Contact = () => {
  const [scrollDown, setScrollDown] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [sujet, setSujet] = useState("");
  const [text, setText] = useState("");
  const [touchStart, setTouchStart] = useState(0);

  const targetRef = useRef(null);
  const isVisible = UseElementOnScreen(
    {
      root: null,
      rootMargin: "0px",
      treshold: 0.9,
    },
    targetRef
  );

  const handleSubmitMail = (e) => {
    e.preventDefault();
    axios.post("https://portefoliojimmyganci.herokuapp.com/", {
      firstname: firstName,
      lastname: lastName,
      email: email,
      subject: sujet,
      text: text,
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setSujet("");
    setText("");
  };

  return (
    <div className="contact">
      <div
        className={`contact__heroHeaderContact ${scrollDown && "scrollDown"}`}
        onWheel={(e) => e.deltaY > 0 && setScrollDown(true)}
        onTouchStart={(e) =>
          setTouchStart(e.nativeEvent.changedTouches[0].clientY)
        }
        onTouchEnd={(e) =>
          e.nativeEvent.changedTouches[0].clientY < touchStart &&
          setScrollDown(true)
        }
      >
        <div className="contact__heroHeaderContact--title">
          <h1>
            C<span>o</span>ntact
          </h1>
        </div>
      </div>
      <div
        onWheel={(e) => e.deltaY < 0 && setScrollDown(false)}
        onTouchStart={(e) =>
          setTouchStart(e.nativeEvent.changedTouches[0].clientY)
        }
        onTouchEnd={(e) =>
          e.nativeEvent.changedTouches[0].clientY > touchStart &&
          setScrollDown(false)
        }
        className={`contact__containerContact ${scrollDown && "scrollDown"}`}
      >
        <div className="contact__containerContact__flex">
          <div className="contact__containerContact__flex--left">
            <div
              className={`contact__containerContact__flex--left__info ${
                isVisible && "show"
              }`}
            >
              <span>
                <a href="tel:+33621450962">
                  <img src={phone} alt="status" />
                </a>
              </span>
              <p>06 21 45 09 62</p>
            </div>
            <div
              className={`contact__containerContact__flex--left__info ${
                isVisible && "show"
              }`}
            >
              <span>
                <a href="mailto:jimmy.ganci@gmail.com">
                  <img src={mail} alt="status" />
                </a>
              </span>
              <p>jimmy.ganci@gmail.com</p>
            </div>
            <div
              ref={targetRef}
              className={`contact__containerContact__flex--left__info ${
                isVisible && "show"
              }`}
            >
              <span>
                <a href={CV} download="cv.pdf">
                  <img src={cvImage} alt="status" />
                </a>
              </span>
              <p>Telecharger mon CV</p>
            </div>
          </div>
          <div className="contact__containerContact__flex--right">
            <h2>
              C<span>o</span>ntactez-m<span>o</span>i<span>!</span>
            </h2>
            <form onSubmit={(e) => handleSubmitMail(e)}>
              <div>
                <input
                  type="text"
                  placeholder="Nom"
                  value={firstName}
                  autoComplete="off"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Prénom"
                  value={lastName}
                  autoComplete="off"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Mail"
                  value={email}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="text"
                  placeholder="Sujet"
                  value={sujet}
                  autoComplete="off"
                  onChange={(e) => setSujet(e.target.value)}
                  required
                />
              </div>
              <div>
                <textarea
                  name="text"
                  id="text"
                  cols="50"
                  rows="5"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Ecrivez votre message..."
                  required
                ></textarea>
              </div>
              <button type="submit">ENVOYER</button>
            </form>
          </div>
        </div>
        <div className="contact__containerContact__flex--left__social">
          <div className="contact__containerContact__flex--left__social__info">
            <span>
              <a
                href="https://github.com/Jimmyganci?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="status" />
              </a>
            </span>
          </div>
          <div className="contact__containerContact__flex--left__social__info">
            <span>
              <a
                href="https://www.linkedin.com/in/jimmy-ganci-b4a9a5209/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="status" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
