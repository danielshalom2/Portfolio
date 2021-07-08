import "./portfolio.scss";
//import { useState } from "react";
//import PortfolioList from "../portfolioList/PortfolioList";

export default function Portfolio() {
  //const [selected, setSelected] = useState("featured");
  //const list = [
    //{ id: "featured", title: "Featured" },
    //{ id: "web", title: "web App" },
    //{ id: "mobile", title: "Mobile App" },
    //{ id: "content", title: "Content" },
  //];
  return (
    <div className="portfolio" id="portfolio">
      <a href="#aboutme" className="back">
        <img src="assets/down.png" alt="" />
      </a>
      <h1>Projects</h1>
      {/*<ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
        </ul>*/}
      <div className="container">
        <div className="item">
          <a
            href="https://github.com/danielshalom2/Timber"
            target="_blank"
            rel="noreferrer"
          >
            <img src="../../../assets/timber.png" alt="" />
            <h3>Timber</h3>
          </a>
        </div>
        <div className="item">
          <a
            href="https://github.com/danielshalom2/Fat_Off"
            target="_blank"
            rel="noreferrer"
          >
            <img src="../../../assets/fatoff.png" alt="" />
            <h3>Fat Off</h3>
          </a>
        </div>
        <div className="item">
          <a
            href="https://github.com/danielshalom2/Morphological-Dilation-and-Erosion"
            target="_blank"
            rel="noreferrer"
          >
            <img src="../../../assets/morph.png" alt="" />
            <h3>Morphological Ops</h3>
          </a>
        </div>
        <div className="item">
          <a
            href="https://github.com/danielshalom2/NLP_voicEnter"
            target="_blank"
            rel="noreferrer"
          >
            <img src="../../../assets/voicenter.png" alt="" />
            <h3>VoicEnter</h3>
          </a>
        </div>
        <div className="item">
          <a
            href="https://github.com/danielshalom2/Social_Project"
            target="_blank"
            rel="noreferrer"
          >
            <img src="../../../assets/social.png" alt="" />
            <h3>Social Project</h3>
          </a>
        </div>
        <div className="item">
          <a
            href="https://github.com/danielshalom2/react-to-do"
            target="_blank"
            rel="noreferrer"
          >
            <img src="../../../assets/todo.jpeg" alt="" />
            <h3>TODO List</h3>
          </a>
        </div>
        
      </div>
      <div className="forward">
      <a href="#skills" className="forward">
        <img src="assets/down.png" alt="" />
      </a>

      </div>
      
    </div>
    
  );
}
