import "./aboutme.scss";

export default function Aboutme() {
  return (
    <div className="aboutme" id="aboutme">
      <a href="#intro" className="back">
        <img src="assets/down.png" alt="" />
      </a>
      <h1>About Me</h1>
      <div className="content">
        <h2>
          I am retiring from the Israeli Air Force after ten years of service.
          During my military service as an officer, I promoted cross-cutting
          processes, conducted missions, and commanded soldiers while working
          under pressure. I am a responsible person with high management skills
          and a great passion for programming. My strengths are independent
          learning, high self-discipline, team player, creativity, and a desire
          to develop and learn all the time. I am looking for a full-time job as
          a software developer.
        </h2>
 
        <h3>Education:</h3>
        <h2>
          Bsc. Computer Science - 2018-2021 - Holon Institute of Technology.
        </h2>
        <h2>
          Practical Electronic Engineer - 2009-2011- Ort Flight And Space.
        </h2>


      </div>
      <div className="container">
        <div className="item">
          <img src="../../../assets/hit.png" alt="" />
          <h3>Holon Institute of Technology</h3>
        </div>
        <div className="item">
          <img src="../../../assets/iaf.jpg" alt="" />
          <h3>Israeli Air Force</h3>
        </div>
        <div className="item">
          <img src="../../../assets/ort.jpg" alt="" />
          <h3>Ort Flight and Space</h3>
        </div>
      </div>
      <a href="#portfolio">
        <img src="assets/down.png" alt="" />
      </a>
    </div>
  );
}
