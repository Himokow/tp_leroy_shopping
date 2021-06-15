import React from 'react';
import {useSelector} from "react-redux";
import Order from "./order";
import './order.css';

const Admin = () => {
    const orders = useSelector(state => state.orders.orders)
    console.log(orders);
    return (
        orders.length > 0 ?
            <div className='order_container'>
                {orders.map(o => <Order order={o}/>)}
            </div>
            : <p>Aucune commande</p>
    )
};

export default Admin;