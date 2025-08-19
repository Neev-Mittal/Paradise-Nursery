import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function PlantCard({ plant }) {
  const dispatch = useDispatch();

  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      textAlign: "center",
      width: "220px"
    }}>
      <img src={plant.image} alt={plant.name} style={{ width: "100%", borderRadius: "8px" }}/>
      <h3>{plant.name}</h3>
      <p>{plant.description}</p>
      <p><b>${plant.price}</b></p>
      <button
        onClick={() => dispatch(addToCart(plant))}
        style={{
          marginTop: "8px",
          padding: "8px 12px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
