import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { cartContext } from '../App'
const Header = () => {
  const {cart}=useContext(cartContext)
  return (
    <div className='navbar'>
      <Link to={"/"} className='logo'>The Food Taxi</Link>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/cart"}><span className='cartCount'>{cart.length}</span> View Cart</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header