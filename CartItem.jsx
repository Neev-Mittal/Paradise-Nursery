import { useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../redux/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      border: "1px solid #ddd",
      padding: "12px",
      borderRadius: "8px",
      marginBottom: "10px"
    }}>
      <img src={item.image} alt={item.name} style={{ width: "80px", height: "80px", borderRadius: "8px" }}/>
      <div>
        <h3>{item.name}</h3>
        <p>${item.price} each</p>
        <p>Total: ${item.price * item.quantity}</p>
      </div>
      <div>
        <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
        <span style={{ margin: "0 10px" }}>{item.quantity}</span>
        <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
      </div>
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        style={{ color: "red", border: "none", background: "transparent" }}
      >
        Delete
      </button>
    </div>
  );
}
