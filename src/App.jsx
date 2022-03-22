import "./App.scss";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import LandingPage from "./Components/Landing-Page/LandingPage";
import Navbar from "./Components/Nav/Navbar";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
