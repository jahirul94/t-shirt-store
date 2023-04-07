import React from 'react';
import './Cart.css'

const Cart = ({cart , removeDataFromCart}) => {
    // conditional rendaring 
    let message ;
    if(cart.length === 0){
       message = <p>Please added some products </p>
    }
    // end 
    return (
        <div className= {cart.length > 2 ? 'cart' : "blues"}>
             <h2>{cart.length}</h2>
              {message}
              {
                cart.map(tshirt => <p key={tshirt._id} tshirt ={tshirt}>{tshirt.name} 
                 <button onClick={()=>removeDataFromCart(tshirt._id)}
                >X</button> </p>)
              }
        </div>
    );
};

export default Cart;