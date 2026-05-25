import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HEADER Codes */}
      <Header message="Frontend Web Developer focused on modern design, performance, and user experience." />

      <Profile
        name="Bibi Mariam Abdul Shukoor"
        title="Front-End Web Developer"
        bio="I’m a frontend web developer focused on creating clean, responsive, and modern websites that help businesses build trust and improve user experience."
      />

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="about-text">
          <h2>
            About <span>Me</span>
          </h2>

          <p>
            I am a passionate front-end developer who loves building responsive
            and user-friendly web applications.
          </p>

          <button className="about-btn">Show More</button>
        </div>

        <div className="hobbies-card">
          <h3>Hobbies</h3>

          <ul>
            <li>💻 Coding</li>
            <li>💻 Programming</li>
            <li>🎨 Design</li>
            <li>📚 Reading</li>
            <li>🎮 Gaming</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <Projects />

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;
