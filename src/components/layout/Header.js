import { Fragment } from "react";

import mealsImg from "../assets/meals.jpg";
import styles from "./css/Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <button>cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="a table full of food!" />
      </div>
    </Fragment>
  );
};

export default Header;
