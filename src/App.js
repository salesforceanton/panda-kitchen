import React, { useState } from "react";

import Header from "./components/layout/header/Header";
import Meals from "./components/meals/meals/Meals";
import Cart from "./components/cart/Cart/Cart";

function App() {
    const [showCart, setShowCart] = useState(false);
    const hideCartHandler = () => setShowCart(false);
    const openCartHandler = () => setShowCart(true);

    return (
        <React.Fragment>
            <Cart showCart={showCart} onCloseCartModal={hideCartHandler}></Cart>
            <Header onOpenCart={openCartHandler}/>
            <Meals/>
        </React.Fragment>
    );
}

export default App;
