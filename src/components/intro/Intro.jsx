import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
      init(textRef.current, {
          showCursor: true,
          backDelay:1500,
          backSpeed: 20,
          strings:[" Developer", "Innovator", "Entrepreneur"],
      });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/daniel.png" alt="" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Daniel Shalom</h1>
          <h3>
           Software <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#aboutme">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
