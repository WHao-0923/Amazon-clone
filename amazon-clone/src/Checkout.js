import React from 'react';
import './Checkout.css'
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout(props) {
    const [{cart}, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                {/* Placeholder */}
                <img className='checkout__ad'
                     src='https://teamwti.com/wp-content/uploads/2020/07/AmazonAdvertising._V280400344_.png'
                     alt=''/>
                <div className="checkout__title">
                    <h2> Your Shopping Cart</h2>
                    {cart.map((item) => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}/>))}

                </div>
            </div>

            <div className='checkout__right'>
                <Subtotal/>
            </div>
        </div>
    );
}

export default Checkout;