import "./App.scss";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import LandingPage from "./Components/Landing-Page/LandingPage";
import Navbar from "./Components/Nav/Navbar";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Timeline from "./Components/timeline/Timeline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/portfolio"
            element={
              <>
                <LandingPage />
                <Projects />
                <About />
                <Contact />
              </>
            }
          />
          <Route
            path="portfolio/timeline"
            element={
              <>
                <Timeline />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
