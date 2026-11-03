import "./Navbar.css";

const Navbar = () => {
  const navItems = [
    { name: "Home", link: "#Home", dropdown: false },
    { name: "Learn", link: "#Learn", dropdown: true },
    { name: "Contact", link: "#Contact", dropdown: false },
    { name: "About", link: "#About", dropdown: false },
  ];

  return (
    <header className="site-header">

      {/* LEFT: LOGO */}
      <div className="nav-logo">
        <a href="#home" className="brand-mark">
          LearnLoop
        </a>
      </div>

      {/* CENTER: NAV LINKS */}
      <nav className="main-nav">
        {navItems.map((item) => (
          <a href={item.link} key={item.name}>
            {item.name}
            {item.dropdown && (
              <span className="nav-chevron"></span>
            )}
          </a>
        ))}
      </nav>

      {/* RIGHT: ACTIONS */}
      <div className="nav-actions">
        <a href="/auth" className="nav-button nav-button-muted">
          Log In
        </a>
        <a href="/auth" className="nav-button nav-button-light">
          Sign Up
        </a>
      </div>

    </header>
  );
};

export default Navbar;
