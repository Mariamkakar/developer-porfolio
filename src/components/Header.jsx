function Header({ message }) {
  return (
    <header id="home" className="header">
      <div className="hero-text">
        <h1>Bibi Mariam Abdul Shukoor</h1>

        <p>{message}</p>

        <div className="line"></div>

        <h3>Building Modern and Responsive Web Applications</h3>
      </div>
    </header>
  );
}

export default Header;
