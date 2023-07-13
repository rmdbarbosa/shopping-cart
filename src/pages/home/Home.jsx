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
        V<span className="faulty-letter">O</span>VOZINHA SHOP
      </span>
    </button>
  );
}
