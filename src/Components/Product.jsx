//import React from 'react'
/* eslint-disable react/prop-types */

import { useContext } from "react";
import "./Product.css"
import {cartContext} from "./cartContext"
const Product = ({product}) => {
    const {cart,setCart} = useContext(cartContext);
    const addCart = () => {
        setCart([...cart,product]);
    }
    const removeCart = () => {
        setCart(cart.filter((c) => c._id !== product._id));
    }
  return (
    <div className='product'>
      <div className="img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="details">
        <div className="product-name">
            <h3>{product.name}</h3>
        </div>
        <div className="product-price">
            <p>Price: {product.price}rs</p>
        </div>
        {cart.includes(product)?(<button className="btnRemove" onClick={removeCart}>remove from cart</button>)
        :(<button className="btnAdd" onClick={addCart}>Add to cart</button>)}
      </div>
    </div>
  )
}

export default Product
