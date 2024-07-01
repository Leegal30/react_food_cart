import { useState } from 'react'
import { BrowserRouter, Route,Routes} from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Cart from './Components/Cart'
import {cartContext} from "./Components/cartContext"
function App() {
   const [cart, setCart] = useState([])

  return (
      <cartContext.Provider value={{cart, setCart}}>
        <BrowserRouter>
        <Header />
        <div className="routes">
          <Routes>
            <Route path="/" element ={<Home cart = {cart} setCart ={setCart}/>}/>
            <Route path="/cart" element={<Cart cart = {cart} setCart ={setCart} />}/>
          </Routes>
        </div>
        </BrowserRouter>
      </cartContext.Provider>
    )
}

{/* <BrowserRouter>
<Header />
<div className="routes">
  <Routes>
    <Route path="/" element ={<Home cart = {cart} setCart ={setCart}/>}/>
    <Route path="/cart" element={<Cart cart = {cart} setCart ={setCart} />}/>
  </Routes>
</div>
</BrowserRouter> */}
export default App
