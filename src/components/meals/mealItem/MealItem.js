import { useContext } from "react";

import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";
import styles from "./css/MealItem.module.css";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `₹${props.meal.price.toFixed(2)}`;

  const addToCartHandler = (quantity) => {
    cartCtx.addItem({
      id: props.meal.id,
      name: props.meal.name,
      quantity: quantity,
      price: props.meal.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={styles.description}>{props.meal.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.meal.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
