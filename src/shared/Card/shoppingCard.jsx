import React from 'react';
import {Button, Card} from "antd";
import Meta from "antd/es/card/Meta";
import './shoppingCard.css'

const ShoppingCard = ({fruit, addProduct}) => {
    return (
        <Card
            className='shopping_card'
            style={{ width: 240 }}
        cover={<img alt='fruit' src={fruit.image}/>}
            title={fruit.name}
        >
            <div className='shopping_card_content'>
                <p>Prix : {fruit.price} €</p>
                <p>Stock : {fruit.stock}</p>
                <Button type='primary' disabled={fruit.stock <= 0 } onClick={() => addProduct(fruit)}>Ajouter</Button>
            </div>
        </Card>
    )
};

export default ShoppingCard