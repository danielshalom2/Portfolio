import "./contact.scss";
import { Mail, GitHub, LinkedIn, Call, PictureAsPdf } from "@material-ui/icons";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <a href="#skills" className="back">
        <img src="assets/down.png" alt="" />
      </a>
      <h1>Contact</h1>
      <div className="content">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/shake.png" alt="" />
          </div>
        </div>
        <div className="right">
        <div className="itemContainer">
            <PictureAsPdf className="icon" />
            <span>
              <a href="../../../assets/‏‏Daniel Shalom CV.pdf" target="_blank" rel="noreferrer">
                Resume
              </a>
            </span>
          </div>
          <div className="itemContainer">
            <Call className="icon" />
            <span>
              <a href="tel:+972528065511" target="_blank" rel="noreferrer">
                +972 52 806 5511
              </a>
            </span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>
              <a
                href="mailto:ddanielsshalom@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                ddanielsshalom@gmail.com
              </a>
            </span>
          </div>
          <div className="itemContainer">
            <GitHub className="icon" />
            <span>
              <a
                href="https://github.com/danielshalom2/"
                target="_blank"
                rel="noreferrer"
              >
                danielshalom2
              </a>
            </span>
          </div>
          <div className="itemContainer">
            <LinkedIn className="icon" />
            <span>
              <a
                href="https://www.linkedin.com/in/daniel-shalom-bsc-computer-science/"
                target="_blank"
                rel="noreferrer"
              >
                Daniel Shalom
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
