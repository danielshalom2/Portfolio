import "./skills.scss";

import { Icon } from "@iconify/react";
import pythonIcon from "@iconify-icons/logos/python";
import javaIcon from "@iconify-icons/logos/java";
import javascriptIcon from "@iconify-icons/logos/javascript";
import cIcon from "@iconify-icons/logos/c";
import cPlusplus from "@iconify-icons/logos/c-plusplus";
import jenkinsIcon from "@iconify-icons/logos/jenkins";
import gitIcon from "@iconify-icons/logos/git";
import fileTypeReactjs from "@iconify-icons/vscode-icons/file-type-reactjs";
import fileTypeHtml from "@iconify-icons/vscode-icons/file-type-html";
import fileTypeCss from "@iconify-icons/vscode-icons/file-type-css";
import fileTypeScss from "@iconify-icons/vscode-icons/file-type-scss";
import fileTypeMysql from "@iconify-icons/vscode-icons/file-type-mysql";
import numpyIcon from "@iconify-icons/logos/numpy";
import pandasIcon from "@iconify-icons/simple-icons/pandas";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <a href="#portfolio" className="back">
        <img src="assets/down.png" alt="" />
      </a>
      <h1>Skills</h1>
      <div>
        <Icon className="icon" icon={pythonIcon} />
        <Icon className="icon" icon={javaIcon} />
        <Icon className="icon" icon={cPlusplus} />
        <Icon className="icon" icon={cIcon} />
      </div>
      <div>
        <Icon className="icon" icon={javascriptIcon} />
        <Icon className="icon" icon={fileTypeReactjs} />
        <Icon className="icon" icon={fileTypeHtml} />
        <Icon className="icon" icon={fileTypeCss} />
        <Icon className="icon" icon={fileTypeScss} />
      </div>
      <div>
        <Icon className="icon" icon={fileTypeMysql} />
        <Icon className="icon" icon={jenkinsIcon} />
        <Icon className="icon" icon={gitIcon} />
        <Icon className="icon" icon={numpyIcon} />
        <Icon className="icon" icon={pandasIcon} />
      </div>

      <div className="forward">
        <a href="#contact" className="forward">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
