import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className="flex items-center border-b py-2">
      <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <div className="text-gray-500">Kazancın: {item.discount.toFixed(2)} TL</div>
        <div className="text-orange-500 font-semibold">{item.price.toFixed(2)} TL</div>
      </div>
    </div>
  );
};

export default CartItem;