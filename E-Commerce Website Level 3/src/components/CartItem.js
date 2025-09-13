import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      updateQuantity(item.id, newQuantity);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border">
      <img
        src={item.image}
        alt={item.title}
        className="w-16 h-16 object-cover rounded-md"
      />
      
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-gray-900 truncate">
          {item.title}
        </h3>
        <p className="text-sm text-gray-500">${item.price}</p>
      </div>
      
      <div className="flex items-center space-x-2">
        <label htmlFor={`quantity-${item.id}`} className="text-sm text-gray-600">
          Qty:
        </label>
        <input
          id={`quantity-${item.id}`}
          type="number"
          min="1"
          max="99"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-16 px-2 py-1 border border-gray-300 rounded-md text-sm text-center focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>
      
      <div className="text-right">
        <p className="text-sm font-medium text-gray-900">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <button
          onClick={handleRemove}
          className="text-red-600 hover:text-red-800 text-sm font-medium"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
