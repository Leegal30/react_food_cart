import "./cart.css"
/* eslint-disable react/prop-types */
import { useEffect, useState ,useContext} from "react";
import {cartContext} from "./cartContext"
const Cart = () => {
  const {cart} = useContext(cartContext);
  const [total,setTotal] = useState(0);
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr) => acc+parseInt(curr.price),0))
  },[cart])
  return (
    <div className="cart-container">
      {cart.map((product) => (
        <div className="cart-product" key={product._id}>
        <div className="img">
          <img src={product.image} alt="" />
        </div>
        <div className="cart-details">
          <h3>{product.name}</h3>
          <p>price Rs: {product.price}</p>
        </div>
      </div>
      ))}
      <h2 className="total">Total: {total}RS</h2>
    </div>
  )
}

export default Cart
