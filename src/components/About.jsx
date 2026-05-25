import { useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false);

  const hobbies = ["Coding", "Reading", "Gaming", "Learning New Technologies"];

  return (
    <section className="about">
      <h2>About Me</h2>

      <p>I am learning React to become a professional frontend developer.</p>

      {showMore && (
        <p>
          My goal is to work on real-world projects and improve my JavaScript
          and React skills every day.
        </p>
      )}

      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>

      <h3>My Hobbies</h3>

      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </section>
  );
}

export default About;
