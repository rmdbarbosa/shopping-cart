import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const indigo = "var(--clr-indigo)";

  React.useEffect(() => {
    const theme = localStorage.getItem("theme");
    theme && document.body.classList.add(theme);
    if (!theme) {
      return;
    } else {
      document.documentElement.style.setProperty("--glow-color", `${indigo}`);
    }
  }, []);

  return (
    <>
      <button
        id="home__button"
        className="glowing-btn"
        onClick={() => navigate("/shop")}
      >
        <span className="glowing-txt">
          S<span className="faulty-letter">HO</span>P
        </span>
      </button>
    </>
  );
}
