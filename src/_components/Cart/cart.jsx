import React, {useState} from 'react';
import {Button, Drawer} from "antd";
import {useDispatch, useSelector} from "react-redux";
import CartProduct from "./cartProduct";
import {removeToCart, resetCart, updateCart} from "../../store/actions/cart";
import './cart.css';
import {Link} from "react-router-dom";

const Cart = () => {
    const cart = useSelector(state => state.cart.cart);
    const [visible, setVisible] = useState(false)

    const dispatch = useDispatch();
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    }

    const updateProduct = (product, operation) => {
        const updatedProduct = {...product};
        if(operation === 'minus'){
            updatedProduct.quantity -= 1
        } else {
            updatedProduct.quantity += 1
        }

        console.log(updatedProduct.quantity)
        if(updatedProduct.quantity < 1){
            deleteProduct(updatedProduct);
        } else {
            dispatch(updateCart(updatedProduct))
        }
    }

    const deleteProduct = (product) => {
        dispatch(removeToCart(product))
    }

    const resetMyCart = () => {
        dispatch(resetCart());
    }
    return (
        <>
            <Button type='primary' onClick={showDrawer}>Panier</Button>
            <Drawer
            title={
                <div className='cart_header'>
                <p>Panier</p>
                    <Button type="danger" onClick={resetMyCart}>Vider mon panier</Button>
                </div>
            }
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
        >
                <div className="cart_content">
                    {cart.length < 1 ? <p>Aucun article</p> :
                        <div>
                            {cart.map(c => <CartProduct product={c} updateProduct={updateProduct} deleteProduct={deleteProduct}/>)}
                            <Button type='primary' className='pay_button'>
                                <Link to='/pay'>
                                    Passer au paiement
                                </Link>
                            </Button>
                        </div>
                    }
                </div>
        </Drawer>
        </>
    )
};

export default Cart;