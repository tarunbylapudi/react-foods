import { useContext } from "react";
import CartContext from "../../store/cart-context";

import Modal from "../common/Modal";
import CartItem from "./CartItem";
import styles from "./css/Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;
  const isCartEmpty = cartCtx.items.length <= 0;

  const addItemCartHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  const removeItemCartHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          onAdd={addItemCartHandler.bind(null, item)}
          onRemove={removeItemCartHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {!isCartEmpty && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
