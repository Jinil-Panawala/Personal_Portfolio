import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>       
      <NavBar />
      <Home />
      <Projects />
      <Experience />
      <About />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
