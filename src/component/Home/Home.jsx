import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DisplayTShirt from "../DisplayTShirt/DisplayTShirt";
import "./Home.css";
import Cart from "../Cart/Cart";
import toast from 'react-hot-toast';

const Home = () => {
  const tshirts = useLoaderData();

  const [cart, setCart] = useState([]);


  const handleCartDetails = (tshirts) => {
    const exist = cart.find(ts => ts._id === tshirts._id)
    if(exist){
        toast("You Have Already added This T-Shirt")

    }

     else{
        const newCart = [...cart , tshirts];
        setCart(newCart);

     }
  };
 

  const removeDataFromCart = (id) => {
    const remaining = cart.filter(ts => ts._id !== id)
    setCart(remaining);
  };

  return (
    <div className="home-container">
      <div className="cart-details">
        {tshirts.map((tShirt) => (
          <DisplayTShirt
            key={tShirt._id}
            tShirt={tShirt}
            handleCartDetails={handleCartDetails}
          ></DisplayTShirt>
        ))}
      </div>
      <div className="card-container">
        <Cart cart={cart} removeDataFromCart={removeDataFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;