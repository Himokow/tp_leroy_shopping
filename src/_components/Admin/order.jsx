import React from 'react';
import {Card} from "antd";
import * as moment from "moment";
import OrderDetail from "./orderDetail";
import './order.css'

const Order = ({order}) => {
    console.log(Date.now());
    return (
        <Card className='order_card'>
            <p>{moment(order.date).format('DD/MM/YYYY')} - {order.user.firstName} {order.user.lastName}</p>
            <OrderDetail order={order}/>
        </Card>
    )
};

export default Order;