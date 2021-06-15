import React from 'react';
import {Button, Card} from "antd";

const OrderDetailProduct = ({product}) => {
    return (
        <Card
            className='shopping_card'
            style={{ width: 200 }}
            cover={<img alt='fruit' src={product.image}/>}
            title={product.name}
        >
            <div className='shopping_card_content'>
                <p>Quantité : {product.quantity}</p>
            </div>
        </Card>
    )
};

export default OrderDetailProduct;