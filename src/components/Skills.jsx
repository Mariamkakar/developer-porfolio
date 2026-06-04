function Skills() {
  const skills = [
    {
      name: "HTML",
      level: 95,
      fact: "I enjoy building semantic and accessible web pages.",
    },
    {
      name: "CSS",
      level: 90,
      fact: "I love creating responsive and modern designs.",
    },
    {
      name: "JavaScript",
      level: 85,
      fact: "I enjoy making websites interactive.",
    },
    {
      name: "React",
      level: 80,
      fact: "React helps me build reusable UI components.",
    },
    {
      name: "Git & GitHub",
      level: 80,
      fact: "I use GitHub for version control and collaboration.",
    },
    {
      name: "Figma",
      level: 75,
      fact: "I create and convert UI designs into code.",
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>

      {skills.map((skill, index) => (
        <div className="skill-card" key={index}>
          <div className="skill-info">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>

          <p className="fun-fact">{skill.fact}</p>
        </div>
      ))}
    </section>
  );
}

export default Skills;
