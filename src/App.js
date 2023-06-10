import { Fragment } from "react";

import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <Fragment>
      
      <Header />
      <main>
        <Meals />
      </main>
      <Cart />
    </Fragment>
  );
}

export default App;
