import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "../pages/cart/cart";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  function toggleTheme() {
    if (document.body.classList.contains("light-mode")) {
      document.body.removeAttribute("class");
    } else {
      document.body.classList.add("light-mode");
    }
  }

  function handleClick() {
    setIsMobileNavOpen(!isMobileNavOpen);
  }

  React.useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    // Cleanup function
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isMobileNavOpen]);

  return (
    <>
      <header className="header container">
        <nav>
          <ul className="header__menu">
            <li>
              <Link to="/" className="header__link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="header__link">
                Shop
              </Link>
            </li>

            <li>
              <button className="header__link" onClick={() => setIsOpen(true)}>
                Cart
              </button>
              <Cart open={isOpen} onClose={() => setIsOpen(false)}></Cart>
            </li>
            <li className="header__line"></li>
            <li>
              <button
                id="theme-toggle"
                className="header__sun"
                onClick={toggleTheme}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </button>
            </li>
          </ul>
          <button className="header__bars" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <div
        className="mobile-nav"
        style={isMobileNavOpen ? { display: "flex" } : { display: "none" }}
      >
        <nav>
          <ul className="mobile-nav__menu">
            <li>
              <Link to="/" className="mobile-nav__link" onClick={handleClick}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="mobile-nav__link"
                onClick={handleClick}
              >
                Shop
              </Link>
            </li>
            <li>
              <button
                className="mobile-nav__link"
                onClick={() => setIsOpen(true)}
              >
                Cart
              </button>
              <Cart open={isOpen} onClose={() => setIsOpen(false)}></Cart>
            </li>
            <li className="mobile-nav__link-line"></li>
            <li>
              <button
                id="theme-toggle"
                className="mobile-nav__sun"
                onClick={toggleTheme}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {/* End of Mobile Navigation */}
    </>
  );
};
