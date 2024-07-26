import React from 'react';
import CartItem from './CartItem';

const Cart = () => {
  const items = [
    {
      id: 1,
      name: 'Futbol Basketbol Voleybol Top Şişirme Pompası',
      price: 34.70,
      discount: 20.30,
      img: 'https://via.placeholder.com/150', // Örnek resim
    },
    {
      id: 2,
      name: 'Voleybol Topu Dikişli Renkli',
      price: 59.29,
      discount: 34.70,
      img: 'https://via.placeholder.com/150', // Örnek resim
    }
  ];

  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto bg-white p-4 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Sepetim (2 Ürün)</h2>
      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="flex justify-between items-center mt-4 border-t pt-4">
        <div className="text-lg font-semibold">Toplam: {total.toFixed(2)} TL</div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded">Sepeti Onayla</button>
      </div>
    </div>
  );
};

export default Cart;
