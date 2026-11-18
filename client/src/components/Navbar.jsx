import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [learnOpen, setLearnOpen] = useState(false);
  const learnMenuRef = useRef(null);
  const closeMenuTimerRef = useRef(null);

  const cancelMenuClose = () => {
    if (closeMenuTimerRef.current) {
      window.clearTimeout(closeMenuTimerRef.current);
      closeMenuTimerRef.current = null;
    }
  };

  const scheduleMenuClose = () => {
    cancelMenuClose();
    closeMenuTimerRef.current = window.setTimeout(() => {
      setLearnOpen(false);
      closeMenuTimerRef.current = null;
    }, 120);
  };

  useEffect(() => {
    const closeMenu = (event) => {
      if (learnMenuRef.current && !learnMenuRef.current.contains(event.target)) {
        setLearnOpen(false);
      }
    };

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setLearnOpen(false);
      }
    };

    document.addEventListener("mousedown", closeMenu);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeMenu);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

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
        <a href="#home">Home</a>
        <div
          className="nav-dropdown"
          ref={learnMenuRef}
          onMouseEnter={cancelMenuClose}
          onMouseLeave={scheduleMenuClose}
        >
          <button
            type="button"
            className="nav-dropdown-trigger"
            aria-expanded={learnOpen}
            aria-haspopup="menu"
            onClick={() => setLearnOpen((open) => !open)}
          >
            Learn
            <span className={`nav-chevron ${learnOpen ? "nav-chevron-open" : ""}`}></span>
          </button>
          {learnOpen && (
            <div className="learn-menu" role="menu">
              <a href="#learn" role="menuitem" onClick={() => setLearnOpen(false)}>
                Learning paths
              </a>
              <a href="#practice" role="menuitem" onClick={() => setLearnOpen(false)}>
                Practice questions
              </a>
              <a href="#interviews" role="menuitem" onClick={() => setLearnOpen(false)}>
                Mock interviews
              </a>
            </div>
          )}
        </div>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </nav>

      {/* RIGHT: ACTIONS */}
      <div className="nav-actions">
        <Link to="/profile" className="nav-button nav-profile-button">
          Profile
        </Link>
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
