import React, { useState, useRef, useContext, forwardRef, useImperativeHandle } from 'react';

import styles from './ConfirmationForm.module.css';
import Modal from '../../common/modal/Modal';
import FormInput from '../../common/formInput/FormInput';
import Card from '../../common/card/Card';
import { CartContext } from '../../cart/cartContext/CartContext';

const ConfirmationForm = forwardRef((props, ref) => {
    const { amount, items } = useContext(CartContext);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const nameInputRef = useRef();
    const phoneInputRef = useRef();
    const addressInputRef = useRef();

    const nameChangeHandler = (e) => setName(e.target.value);
    const phoneChangeHandler = (e) => setPhone(e.target.value);
    const addressChangeHandler = (e) => setAddress(e.target.value);

    const clearForm = () => {
        setName('');
        setPhone('');
        setAddress('');
    }

    useImperativeHandle(ref, () => ({
        clearForm
    }), []);

    const cancelHandler = (e) => {
        e.preventDefault();

        clearForm();
        props.onCancel();
    }

    const reportFormValidity = () => {
        return [nameInputRef, phoneInputRef, addressInputRef]
            .map((e) => e.current.reportValidity())
            .every((e) => !!e)
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if (!reportFormValidity()) {
            return
        }

        const orderDetails = {
            name,
            phone,
            address,
            amount: +amount.toFixed(2),
            items
        }
        props.onConfirm(orderDetails);
    }

    return (
        <Modal show={props.show} onModalClose={props.onCancel}>
            <Card className={styles['form-wrapper']}>
                <h2 className={styles['form-header']}>Order Details</h2>
                
                <form>
                    <FormInput
                        label='Name'
                        placeholder='Enter your Name...' 
                        type='text' 
                        value={name} 
                        onChange={nameChangeHandler}
                        ref={nameInputRef}
                        required
                    />
                    <FormInput
                        label='Phone'
                        type='tel'
                        pattern='^375(29|33|44)\d{7}$'
                        value={phone} 
                        onChange={phoneChangeHandler}
                        ref={phoneInputRef}
                        required
                    />
                    <FormInput
                        label='Address'
                        type='text' 
                        value={address} 
                        onChange={addressChangeHandler}
                        ref={addressInputRef}
                        required
                    />
                    <div className={styles['footer']}>
                        <p><b>Amount:</b> {amount.toFixed(2)}$</p>
                        <div className={styles['footer-control']}>
                            <button className={styles['submit-button']} onClick={submitHandler}>Confirm</button>
                            <button className={styles['cancel-button']} onClick={cancelHandler}>Cancel</button>
                        </div>
                    </div>
                </form>
            </Card>
        </Modal>
    )
}, [])

export default ConfirmationForm;