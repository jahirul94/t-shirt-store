import React from 'react';
import './DisplayTShirt.css'

const DisplayTShirt = ({tShirt , handleCartDetails }) => {
    // console.log(tShirt);
    const {_id , name , gender , price , picture } =  tShirt;
    return (
        <div className='cart-info'>
             <img src={picture} alt="" />
             <h2>{name}</h2>
              <p>Price : $ {price}</p>
              <button onClick={()=> handleCartDetails(tShirt)}>Buy Now</button>
        </div>
    );
};

export default DisplayTShirt;