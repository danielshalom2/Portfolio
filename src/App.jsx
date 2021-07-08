import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Aboutme from "./components/aboutme/Aboutme"
import Menu from "./components/menu/Menu"
import Contact from "./components/contact/Contact"
import Skills from "./components/skills/Skills"
import "./app.scss"
import { useState } from "react"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro />
       <Aboutme />
       <Portfolio />
       <Skills />
       <Contact />

     </div>
    </div>
    
  );
}

export default App;
