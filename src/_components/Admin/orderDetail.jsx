import React, {useState} from 'react';
import {Button, Divider, Modal} from "antd";
import OrderDetailProduct from "./orderDetailProduct";
import './orderDetail.css'

const OrderDetail = ({order}) => {

    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <>
            <Button type='primary' onClick={showModal}>Detail</Button>
            <Modal visible={visible} title='Detail de la commande' onCancel={handleCancel} footer={null}>
                <Divider>Informations</Divider>
                <div>
                    <p>Nom : {order.user.firstName} {order.user.lastName}</p>
                    <p>Email : {order.user.email}</p>
                    <p>Adresse : {order.user.address} {order.user.city}</p>
                </div>
                <Divider>Commande</Divider>
                <div className='detail_product_card_container'>
                    {order.products.map(o => <OrderDetailProduct product={o}/>)}
                </div>
            </Modal>
        </>
    )
};

export default OrderDetail;