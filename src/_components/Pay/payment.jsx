import React from 'react';
import {useSelector} from "react-redux";
import {Button, Input} from "antd";
import './pay.css';
import {Link} from "react-router-dom";

const Payment = () => {
    const cart = useSelector(state => state.cart.cart);
    let totalPrice = 0;
    cart.forEach(c => {
        totalPrice += c.price * c.quantity
    })
    return (
        <div>
            <p className='total_price'>Prix total : {totalPrice}</p>
            <label htmlFor="card_number" className="input_form">
                Numéro de carte
                <Input id="card_number"/>
            </label>
            <label htmlFor="card_cvc" className="input_form">
                CVC
                <Input id="card_cvc"/>
            </label>
            <Button type='primary' className="next_step_button"
            >
                <Link to="/confirm">
                Payer
                </Link>
                </Button>
        </div>
    )
};

export default Payment;