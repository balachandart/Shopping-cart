import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, createContext, useEffect } from 'react';
import './App.css';
import { Home } from './components/Home';
import { ViewCart } from './components/ViewCart';
import Checkout from './components/Checkout';
import data from './Datas.json';

export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [products] = useState(data);

  // View cart
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseFloat(curr.amt) * curr.count, 0));
  }, [cart]);

  return (
    <cartContext.Provider value={{ cart, setCart, products, total }}>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<ViewCart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </BrowserRouter>
    </cartContext.Provider>
  );
}

export default App;
