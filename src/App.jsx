import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import FeedbackWall from "./components/FeedbackWall";
import Footer from "./components/Footer";
import "./styles/App.css";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header message="Front End Web Developer focused on modern design, performance, and user experience." />

                <Profile
                  name="Bibi Mariam Abdul Shukoor"
                  title="Front-End Web Developer"
                  bio="I'm a frontend web developer focused on creating clean, responsive, and modern websites that help businesses build trust and improve user experience."
                />

                <Skills />
                <FeedbackWall />
              </>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
