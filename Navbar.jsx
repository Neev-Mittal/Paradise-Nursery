import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#4CAF50", color: "white" }}>
      <Link to="/" style={{ marginRight: "10px", color: "white" }}>Home</Link>
      <Link to="/products" style={{ marginRight: "10px", color: "white" }}>Products</Link>
      <Link to="/cart" style={{ color: "white" }}>Cart</Link>
    </nav>
  );
}
