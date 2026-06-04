function Footer() {
  return (
    <footer id="contact" className="footer">
      <p className="footer-name">
        © {new Date().getFullYear()} Bibi Mariam Abdul Shukoor <br />
        Front End Web Developer
      </p>

      <div className="social-links">
        <a
          href="https://github.com/Mariamkakar"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/mariam-abdul-shukoor-697379286"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://www.freelancer.com/u/mariamk029"
          target="_blank"
          rel="noreferrer"
        >
          Freelancing
        </a>
      </div>
    </footer>
  );
}

export default Footer;
