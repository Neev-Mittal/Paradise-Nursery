import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../redux/cartSlice";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="page">
      <h1>Your Cart 🛒</h1>

      {cartItems.length === 0 && <p>No items in cart.</p>}

      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div className="cart-item-details">
            <h3>{item.name}</h3>
            <p>${item.price} each</p>
            <p>Total: ${item.price * item.quantity}</p>
          </div>
          <div className="cart-item-actions">
            <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
          </div>
        </div>
      ))}

      {cartItems.length > 0 && (
        <>
          <div className="cart-total">Cart Total: ${total}</div>
          <div className="cart-buttons">
            <button>Continue Shopping</button>
            <button>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}
