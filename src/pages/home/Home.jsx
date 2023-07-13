import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <h1 className="home" onClick={() => navigate("/shop")}>
      Shop
    </h1>
  );
}
