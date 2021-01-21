import React from 'react';
import '../css/shop.css';
import { v4 as uuidv4 } from 'uuid';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/actions';

const Shop = () => {
  const catalogue = useSelector((state) => state.catalogue);
  const dispatch = useDispatch();

  return (
    <main id='catalogue'>
      {Object.values(catalogue).map((item) => (
        <div key={item.id} className='item-card'>
          {item.image}
          <div>
            <strong>{item.name}</strong>
          </div>
          <div>${item.price}</div>
          <div
            id='add-button'
            onClick={() => dispatch(addToCart(item, uuidv4()))}
          >
            Add To Cart
          </div>
        </div>
      ))}
    </main>
  );
};

export default Shop;
