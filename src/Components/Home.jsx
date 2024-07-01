import { useContext, useState } from "react"
import data from "./menus.json"
import Product from "./Product"
/* eslint-disable react/prop-types */ 
import "./Home.css"
import {cartContext} from "./cartContext"
const Home = () => {
  const {cart,setCart} = useContext(cartContext);
    const [product] =useState(data)
  return (
    <div className="product-container">
      {product.map((product) =>(
        <Product key={product._id} product={product} cart = {cart} setCart ={setCart}/>
      ))}
    </div>
  )
}

export default Home
