import React from 'react';
import './CheckoutProduct.css'
import {useStateValue} from "./StateProvider";

function CheckoutProduct({id, image, title, price, rating}) {
    const [{cart}, dispatch] = useStateValue()
    const removeFromCart = () => {
        // remove the item from the cart
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt=''/>
            <div className="checkoutProduct__info">
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className='checkoutProduct__rating'>{
                    Array(rating).fill().map((_, i) => (<p>⭐️</p>))
                }</p>
                <button onClick={removeFromCart}> Remove from Cart </button>
            </div>
        </div>
    );
}

export default CheckoutProduct;