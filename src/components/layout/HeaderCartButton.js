import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../cart/CartIcon";

import styles from "./css/HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [isBtnBump, setIsBtnBump] = useState(false);
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    if (cartCtx.items.length <= 0) {
      return;
    }
    setIsBtnBump(true);

    const timer = setTimeout(() => {
      setIsBtnBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  const numberOfCartItems = cartCtx.items.reduce((currentQuantity, item) => {
    return currentQuantity + item.quantity;
  }, 0);

  const btnClasses = `${styles.button} ${isBtnBump ? styles.bump : ""}`;

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
