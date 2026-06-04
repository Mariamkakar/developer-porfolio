import { useState, useEffect } from "react";

function ProjectUpdates() {
  const [updates, setUpdates] = useState(["Portfolio project started"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdates((prev) => [
        ...prev,
        `New update at ${new Date().toLocaleTimeString()}`,
      ]);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="updates-section">
      <h2 className="updates-title">
        Live <span>Project</span> Updates
      </h2>

      {updates.map((update, index) => (
        <div key={index} className="update-card">
          🚀 {update}
        </div>
      ))}
    </section>
  );
}

export default ProjectUpdates;
