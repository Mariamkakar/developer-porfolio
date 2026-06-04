import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Skills from "./components/Skills";
import FeedbackWall from "./components/FeedbackWall";
import ProjectUpdates from "./components/ProjectUpdates";
function App() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HEADER */}
      <Header message="Front End Web Developer focused on modern design, performance, and user experience." />

      {/* PROFILE */}
      <Profile
        name="Bibi Mariam Abdul Shukoor"
        title="Front-End Web Developer"
        bio="I’m a frontend web developer focused on creating clean, responsive, and modern websites that help businesses build trust and improve user experience."
      />

      {/* ABOUT */}
      <About />

      {/* skills */}
      <Skills />

      {/* PROJECTS */}
      <Projects />

      {/* ContactForm */}
      <ContactForm />

      {/* FeedbackWall */}
      <FeedbackWall />

      {/* ProjectUpdate */}
      <ProjectUpdates />

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;
