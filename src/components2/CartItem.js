// CartItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux2/cartActions';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ itemId: item.id }));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ itemId: item.id }));
  };
  console.log(item);
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      {/* <p>{item.description}</p> */}
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleRemoveFromCart}>Remove from Cart</button>
    </div>
  );
};

export default CartItem;
