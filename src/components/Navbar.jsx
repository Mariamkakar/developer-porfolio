import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">
        <span>My</span> Portfolio
      </h2>

      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#feedback">Feedback</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
