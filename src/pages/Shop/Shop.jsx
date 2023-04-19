import React from 'react'
import Product from './Product';
import { PRODUCTS } from '../../products';
import './shop.css';

const Shop = () => {
  return (
    <div className='shop'>
        <div className='shop_title'>
          <h1>Tech Shop</h1>
        </div>
        <div className='shop_products'>
          {
            PRODUCTS.map((product) => ( 
              <Product 
                data={product}
              />
            ))
          }
        </div>
    </div>
  )
}

export default Shop