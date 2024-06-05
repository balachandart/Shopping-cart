import React, { useContext } from 'react';
import { cartContext } from '../App';
import './Checkout.css'

const Checkout = () => {
  const { cart, total } = useContext(cartContext);

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="checkout-products">
        {cart.map((product) => (
          <div className="checkout-product" key={product.id}>
            <div className="img">
              <img src={product.pic} alt={product.name} />
            </div>
            <div className="checkout-product-details">
              <h3>{product.name}</h3>
              <p>Price Rs: {parseFloat(product.amt).toFixed(2)}</p>
              <p>Quantity: {product.count}</p>
              <p>Subtotal: Rs: {(parseFloat(product.amt) * product.count).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="checkout-total">Total Amount ₹: {total.toFixed(2)} Only</h2>
      <h4><button>Proceed to Payment</button></h4>
    </div>
  );
}

export default Checkout;
