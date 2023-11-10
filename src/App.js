import React, { useState, useEffect } from "react";

import Header from "./components/layout/header/Header";
import Meals from "./components/meals/meals/Meals";
import Cart from "./components/cart/cart/Cart";
import LoadingSpinner from "./components/common/spinner/Spinner";
import { useHttp } from "./hooks/use-http";
import Messages from "./components/common/messages/Messages";

const productsEndpoint = 'https://react-test-http-bae73-default-rtdb.firebaseio.com/products.json';

function App() {
    const [showCart, setShowCart] = useState(false);
    const [showErrorToast, setShowErrorToast] = useState(false);
    const [productsData, setProductsData] = useState([]);
    const { isLoading, error, httpRequest } = useHttp();

    useEffect(() => {
        let errorToastTimeout;
        if (error) {
            setShowErrorToast(true)
            errorToastTimeout = setTimeout(() => setShowErrorToast(false), 3000)
        }
        return () => errorToastTimeout && clearTimeout(errorToastTimeout);
    }, [error])

    useEffect(() => {
        const handleGetProductsData = (response) => {
            const data = Object.keys(response).map((key) => ({ id: key, ...response[key] }));
            setProductsData(data)
        }
        httpRequest({endpoint: productsEndpoint }, handleGetProductsData)
    }, [httpRequest])

    const hideCartHandler = () => setShowCart(false);
    const openCartHandler = () => setShowCart(true);

    return (
        <React.Fragment>
            <Messages show={showErrorToast} message={error} variant='error'/>
            <LoadingSpinner show={isLoading}/>
            <Cart showCart={showCart} onCloseCartModal={hideCartHandler}></Cart>
            <Header onOpenCart={openCartHandler}/>
            <Meals data={productsData}/>
        </React.Fragment>
    );
}

export default App;
