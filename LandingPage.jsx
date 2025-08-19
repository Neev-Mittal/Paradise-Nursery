import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to GreenLeaf 🌱</h1>
        <p>Discover the best aromatic and medicinal plants for your home.</p>
        <button onClick={() => navigate("/products")}>Shop Now</button>
      </div>
    </div>
  );
}
