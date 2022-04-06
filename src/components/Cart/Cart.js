import React from 'react';
import './Cart.css';

const Cart = ({ cart, removeFromCart }) => {
    // conditional rendering options..
    // 1. Element variable
    // 2. ternary operator = condition ? true : false
    // 3. && operator (shorthand)
    let command;
    if (cart.length === 0) {
        command = <p>Please Add Some Items</p>
    }
    else if (cart.length === 1) {
        command = <p>Please Add More....</p>
    }
    else {
        command = <p><small>Thanks for Adding Items</small></p>
    }

    return (
        <div>
            <h2>Selected Items: {cart.length}</h2>


            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => removeFromCart(tShirt)}>X</button>
                </p>)
            }
            {cart.length === 0 || <p className='blue'>Hey!! You are buying</p>}
            {cart.length === 3 && <div className='blue'>
                <h3>Buy some more gift for special person</h3>
            </div>}
            {command}
            {cart.length !== 4 ? <p>Keep Adding</p> : <button>Remove All</button>}
            {cart.length === 4 && <button className='blue'>Review Order</button>}
        </div>
    );
};

export default Cart;