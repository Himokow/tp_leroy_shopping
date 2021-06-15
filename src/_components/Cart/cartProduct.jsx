import React from 'react';
import {Button, Card, Divider} from "antd";
import './cart.css'

const CartProduct = ({product, updateProduct, deleteProduct}) => {
    return (
        <>
        <Card
            style={{ width: 180 }}
            cover={<img alt='fruit' src={product.image}/>}
            className='cart_card'
        >
            <p>{product.name}</p>
            <div className='quantity_selectors'>
                <Button type='danger' shape="circle" onClick={() => updateProduct(product, 'minus')}>-</Button>
                <p className='quantity'>{product.quantity}</p>
                <Button type='primary' shape='circle' onClick={() => updateProduct(product, 'plus')}>+</Button>
            </div>
            <Button onClick={() => deleteProduct(product)} type='danger' className='delete_button'>Supprimer</Button>
        </Card>
        <Divider/>
        </>
    )
};

export default CartProduct;