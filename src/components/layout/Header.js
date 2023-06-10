import { Fragment } from "react";

import mealsImg from "../assets/meals.jpg";
import styles from "./css/Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="a table full of food!" />
      </div>
    </Fragment>
  );
};

export default Header;
