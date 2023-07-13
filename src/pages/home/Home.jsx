import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <button
      id="home__button"
      className="glowing-btn"
      onClick={() => navigate("/shop")}
    >
      <span className="glowing-txt">
        S<span className="faulty-letter">HO</span>P
      </span>
    </button>
  );
}
