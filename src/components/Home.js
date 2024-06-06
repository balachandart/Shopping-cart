import Product from './Product'
import './Home.css'
import { cartContext } from '../App'
import { useContext } from 'react'

export const Home = () => {
 
  const {products}=useContext(cartContext)
  return (
    <div className='product-container'>

      {
        products.map((product)=>( 
            <Product key={product.id} product={product} 
             />
      ))}

    </div>
  )
}
