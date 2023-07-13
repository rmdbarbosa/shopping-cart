import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <header className="header container">
        <nav>
          <ul className="header__menu">
            <li>
              <Link to="/home" className="header__link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="header__link">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/cart" className="header__link">
                Cart
              </Link>
            </li>
            <li className="header__line"></li>
            <li>
              <button id="theme-toggle" className="header__sun">
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
          <button className="header__bars">
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
    </>
  );
};
