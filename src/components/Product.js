import './Product.css';
import { cartContext } from '../App';
import { useContext, useState } from 'react';

const Product = ({ product }) => {
  const { cart, setCart } = useContext(cartContext);
  const [count, setCount] = useState(0); 

  const addCart = () => {
    // Check if the product is already in the cart
    if (!cart.find(item => item.id === product.id)) {
      setCart([...cart, { ...product, count }]);
    }
    setCount(1); 
  };

  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== product.id));
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const name = product.name.length > 21 ? product.name.substring(0, 20) + ".." : product.name;

  return (
    <div className='product'>
      <div className="img">
        <img src={product.pic} alt={product.name} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <p>Price: {product.amt}</p>
        {cart.find(item => item.id === product.id) ? (
          <button className='btnRemove' onClick={removeCart}>Remove</button>
        ) : (
          <button onClick={addCart}>Add to cart</button>
        )}
        <button style={{ marginLeft: "35px", borderRadius: "50%" }} className='count-btn' onClick={handlePlus}>+</button>
        {count}
        <button style={{ borderRadius: "50%" }} className='count-btn' onClick={handleMinus} >-</button>
      </div>
    </div>
  );
};

export default Product;
