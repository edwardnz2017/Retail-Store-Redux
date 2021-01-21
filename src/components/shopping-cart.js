import React from 'react';
import '../css/shopping-cart.css';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../actions/actions';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div id='shopping-cart'>
      <div>
        {cartItems.map((item) => (
          <div key={item.uniqueId} className='cart-item'>
            <div id='info-div'>
              {item.image}
              {item.name}
            </div>
            <div id='price-div'>
              ${item.price}
              <div
                id='remove-div'
                onClick={() => dispatch(deleteFromCart(item.uniqueId))}
              >
                Remove
              </div>
            </div>
          </div>
        ))}
      </div>
      <div id='cart-button-box'>
        <div className='cart-buttons'>
          Checkout $
          {cartItems.reduce((total, currentItem) => {
            return total + Number(currentItem.price);
          }, 0)}
        </div>
        <Link to='/shop' style={{ textDecoration: 'none' }}>
          <div className='cart-buttons'>Keep Shopping</div>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
