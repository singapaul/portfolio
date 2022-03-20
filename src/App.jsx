import "./App.scss";
import About from "./Components/About/About";
import LandingPage from "./Components/Landing-Page/LandingPage";
import Navbar from "./Components/Nav/Navbar";
import Projects from "./Components/Projects/Projects";


function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Projects />
      <About/>

    </div>
  );
}

export default App;
