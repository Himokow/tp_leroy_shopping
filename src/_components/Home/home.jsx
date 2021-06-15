import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import FruitsService from "../../_services/fruits.service";
import ShoppingCard from "../../shared/Card/shoppingCard";
import './home.css';
import {addToCart, updateCart} from "../../store/actions/cart";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() =>{
        FruitsService.fetchFruits(dispatch)
    },[])

    const fruits = useSelector(state => state.fruits.fruits);
    const cart = useSelector(state => state.cart.cart);

    const addProduct = (product) => {
        console.log('here')
        const currentCart = [...cart];
        if(currentCart.findIndex(c => c.id === product.id) === -1){
            dispatch(addToCart({...product, quantity: 1}))
         } else {
            const currentProduct = currentCart.find(c => c.id === product.id)
            dispatch(updateCart({...product, quantity: currentProduct.quantity +1}))
        }
    }
    return (
        <div className="shopping_list">
            {fruits.map(f => <ShoppingCard fruit={f} addProduct={(product) => addProduct(product)}/>)}
        </div>
    )
};

export default Home;