import { useState, useRef } from "react";

import Input from "../../common/Input";
import styles from "./css/MealItemForm.module.css";

const MealItemForm = (props) => {
  const quantityInputRef = useRef();
  const [formIsValid, setFormIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredQuantity = quantityInputRef.current.value;
    const enteredQuantityNumber = +enteredQuantity;

    if (
      enteredQuantity.trim().length === 0 ||
      enteredQuantityNumber < 1 ||
      enteredQuantityNumber > 5
    ) {
      setFormIsValid(false);
      return;
    }

    props.onAddToCart(enteredQuantityNumber);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={quantityInputRef}
        label="quantity"
        input={{
          id: "quantity" + props.id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!formIsValid && <p>Please enter a valid quantity (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
