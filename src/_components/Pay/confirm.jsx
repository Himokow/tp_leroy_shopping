import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useDispatch, useSelector} from "react-redux";
import {addOrder} from "../../store/actions/order";
import {removeUser} from "../../store/actions/user";
import {resetCart} from "../../store/actions/cart";


const Confirm = () => {
    const user = useSelector(state => state.user.user)
    const cart = useSelector(state => state.cart.cart)
    const dispatch = useDispatch();
    const createOrdrer = () => {
        dispatch(addOrder({products : cart, user: user, date: Date.now()}))
        dispatch(removeUser());
        dispatch(resetCart());
    }
    return (
        <div className="confirm_container">
            <FontAwesomeIcon icon="clipboard-check" className="confirm_logo" />
            <p className="confirm_text">Votre commande a bien était prise en compte</p>
            <p className="confirm_text">Un email récapitulatif vous a été envoyé à l&apos;email {user.email}</p>

            <Button type="primary" onClick={createOrdrer}>
                <Link to="/">Retour a l&apos;accueil</Link>
            </Button>
        </div>
    )
}

export default Confirm;