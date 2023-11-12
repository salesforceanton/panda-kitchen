import React, { useState, useEffect, useContext, useRef } from "react";
import { HTTP_METHOD, useHttp } from "./hooks/use-http";

import Header from "./components/layout/header/Header";
import Meals from "./components/meals/meals/Meals";
import Cart from "./components/cart/cart/Cart";
import LoadingSpinner from "./components/common/spinner/Spinner";
import Messages from "./components/common/messages/Messages";
import ConfirmationForm from "./components/order/confirmationForm/ConfirmationForm";
import { CartContext } from "./components/cart/cartContext/CartContext";

const productsEndpoint = 'https://react-test-http-bae73-default-rtdb.firebaseio.com/products.json';
const ordersEndpoint = 'https://react-test-http-bae73-default-rtdb.firebaseio.com/orders.json';
const SUCCESS_ORDER_MESSAGE = 'Order has been created successfully. Let me check and call You!';

function App() {
    const cartCtx = useContext(CartContext);

    const [showCart, setShowCart] = useState(false);
    const [showConfirmationForm, setShowConfirmationForm] = useState(false);
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showErrorToast, setShowErrorToast] = useState(false);
    const [productsData, setProductsData] = useState([]);

    const { isLoading, error, httpRequest } = useHttp();

    const confirmationFormRef = useRef();

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
        httpRequest({ endpoint: productsEndpoint }, handleGetProductsData)
    }, [httpRequest])

    const hideCartHandler = () => setShowCart(false);
    const openCartHandler = () => setShowCart(true);
    const cancelConfirmationFormHandler = () => setShowConfirmationForm(false);
    const placeOrderHandler = () => {
        setShowCart(false);
        setShowConfirmationForm(true);
    }
    const handleCreateOrderSuccess = () => {
        confirmationFormRef.current.clearForm();
        setShowConfirmationForm(false);

        setShowSuccessToast(true);
        setTimeout(() => setShowSuccessToast(false), 3000);

        cartCtx.clearCart();
    }
    const confirmOrder = (details) => {
        httpRequest({ endpoint: ordersEndpoint, method: HTTP_METHOD.POST, body: details }, handleCreateOrderSuccess)
    }

    return (
        <React.Fragment>
            <Messages show={showSuccessToast} message={SUCCESS_ORDER_MESSAGE} variant='success'/>
            <Messages show={showErrorToast} message={error} variant='error'/>
            <LoadingSpinner show={isLoading}/>
            <ConfirmationForm 
                show={showConfirmationForm} 
                onCancel={cancelConfirmationFormHandler}
                onConfirm={confirmOrder}
                ref={confirmationFormRef}
            />
            <Cart 
                showCart={showCart} 
                onCloseCartModal={hideCartHandler}
                onPlaceOrder={placeOrderHandler}
            />
            <Header onOpenCart={openCartHandler}/>
            <Meals data={productsData}/>
        </React.Fragment>
    );
}

export default App;
