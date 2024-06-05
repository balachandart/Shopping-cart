import React, { useContext } from 'react';
import './Cart.css';
import { cartContext } from '../App';
import { Link } from 'react-router-dom';

export const ViewCart = () => {
  const { cart, total } = useContext(cartContext);

  return (
    <>
      <h1 className='cart-heading'>Cart Products</h1>
      <div className='cart-container'>
        {cart.map((product) => (
          <div className="cart-product" key={product.id}>
            <div className="img">
              <img src={product.pic} alt={product.name} />
            </div>
            <div className="cart-product-details">
              <h3>{product.name}</h3>
              <p>Price Rs: {parseFloat(product.amt).toFixed(2)}</p>
              <p>Quantity: {product.count}</p>
              <p>Subtotal: Rs: {(parseFloat(product.amt) * product.count).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className='cart-amt'>Total Amount ₹: {total.toFixed(2)} Only</h2>
      <Link to='/checkout'><button className='checkout'>Proceed to Checkout</button></Link>
    </>
  );
};

