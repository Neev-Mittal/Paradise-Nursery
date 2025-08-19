import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { plants } from "../data/plants";
import { Link } from "react-router-dom";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const medicinalPlants = plants.filter((p) => p.type === "Medicinal");
  const aromaticPlants = plants.filter((p) => p.type === "Aromatic");

  return (
    <div style={{ padding: "20px" }}>
      {/* Cart Icon (Top Right) */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}>
        <Link to="/cart" style={{ textDecoration: "none", position: "relative" }}>
          <span style={{ fontSize: "24px" }}>🛒</span>
          {cartCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-12px",
                background: "red",
                color: "white",
                borderRadius: "50%",
                padding: "2px 8px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              {cartCount}
            </span>
          )}
        </Link>
      </div>

      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Our Plants 🌿</h1>

      {/* Medicinal Plants Section */}
      <h2 style={{ margin: "20px 0" }}>Medicinal Plants</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {medicinalPlants.map((plant) => (
          <div
            key={plant.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              background: "#fff",
              boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={plant.image}
              alt={plant.name}
              style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
            />
            <h3>{plant.name}</h3>
            <p style={{ color: "#555" }}>{plant.description}</p>
            <p style={{ fontWeight: "bold" }}>💲{plant.price}</p>
            <button
              onClick={() => dispatch(addToCart(plant))}
              style={{
                marginTop: "10px",
                padding: "8px 12px",
                border: "none",
                borderRadius: "6px",
                background: "#4CAF50",
                color: "white",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Aromatic Plants Section */}
      <h2 style={{ margin: "40px 0 20px" }}>Aromatic Plants</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {aromaticPlants.map((plant) => (
          <div
            key={plant.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              background: "#fff",
              boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={plant.image}
              alt={plant.name}
              style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
            />
            <h3>{plant.name}</h3>
            <p style={{ color: "#555" }}>{plant.description}</p>
            <p style={{ fontWeight: "bold" }}>💲{plant.price}</p>
            <button
              onClick={() => dispatch(addToCart(plant))}
              style={{
                marginTop: "10px",
                padding: "8px 12px",
                border: "none",
                borderRadius: "6px",
                background: "#4CAF50",
                color: "white",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
