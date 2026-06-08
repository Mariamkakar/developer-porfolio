import { useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false);

  const hobbies = [
    "💻 Coding",
    "📚 Reading",
    "🎮 Gaming",
    "🚀 Learning New Technologies",
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-text">
        <h2>
          About <span>Me</span>
        </h2>

        <p>I am learning React to become a professional Front-End Developer.</p>

        {showMore && (
          <p>
            My goal is to work on real-world projects and improve my JavaScript
            and React skills every day. I enjoy building responsive and
            user-friendly websites that provide a great experience for users.
          </p>
        )}

        <button className="about-btn" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>

      <div className="hobbies-card">
        <h3>My Hobbies</h3>

        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
