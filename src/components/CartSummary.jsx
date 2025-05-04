import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext.jsx';
import { ChevronDown, ShoppingBasket } from 'lucide-react';
import navLinks from '../constants/navLinks.js';

function CartSummary() {
  const { totalItems, totalPrice, cartItems } = useCart();
  const [openCart, setOpenCart] = useState(false);
  const [finalizePurchase, setFinalizePurchase] = useState(false);

  const handleFinalizePurchase = () => {
    if (totalPrice < 149.9) {
      setFinalizePurchase(true);
    } else {
      alert('Compra finalizada com sucesso!');
      setFinalizePurchase(false);
    }
  };

  const handleOpenCart = () => {
    setOpenCart(!openCart);
  };

  const getTotalItemsByCategory = (categoryName) => {
    return cartItems
      .filter(item => item.category === categoryName)
      .reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <>
      {finalizePurchase && (
        <div className="fixed inset-0 bg-black/30 z-40 pointer-events-auto" />
      )}

      <div className={`fixed bottom-0 w-full z-50 text-gray-50 transition-all duration-300
        lg:top-2 lg:right-2 flex lg:flex-col
        ${openCart ? 'h-screen lg:w-96 flex-col' : 'lg:w-48 lg:h-0'}`}>

        <button
          type="button"
          onClick={handleOpenCart}
          className="flex justify-center lg:justify-between items-center w-full py-4 lg:py-2 lg:px-4 bg-orange-500 hover:bg-orange-600 cursor-pointer gap-6 shadow-md lg:rounded-t"
        >
          <span className="relative flex justify-center items-center lg:-mt-4 ml-10 lg:ml-0 bg-green-500 rounded-full w-6 h-6 lg:w-8 lg:h-8">
            <ShoppingBasket className="absolute right-7 lg:right-0 lg:top-5 w-8 h-8" strokeWidth={1.5} />
            <span className="text-white text-xs font-semibold">{totalItems}</span>
          </span>

          <div className="flex lg:flex-col justify-center items-center gap-2 text-gray-50">
            <span className="flex items-end justify-center gap-1 text-sm">
              R$
              <span className="text-xl font-semibold">
                {totalPrice.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })}
              </span>
            </span>
            <span className="flex items-center gap-1">
              <span className="hidden lg:flex uppercase font-semibold">
                {openCart ? 'Fechar' : 'Abrir'}
              </span>
              <ChevronDown
                strokeWidth={2.5}
                className={`transition-transform duration-300
                  ${openCart ? 'rotate-0 lg:rotate-180' : 'rotate-180 lg:rotate-0'}`}
              />
            </span>
          </div>
        </button>

        <div className={`bg-gray-100 text-green-500 transition-all duration-300 w-full overflow-y-auto
          ${openCart ? 'flex flex-col flex-grow' : 'hidden'}`}>
          <ul className="flex flex-col w-full">
            {navLinks.map((item) => {
              const categoryTotal = getTotalItemsByCategory(item.title);
              return (
                <li key={item.title} className="flex gap-2 py-2 px-4 border-b-2 border-green-500 items-center">
                  <a href={`#${item.title.toLowerCase()}`}>
                    <img className="w-5 h-5" src={item.icon} alt={item.title} />
                  </a>
                  <span className="pl-2 font-normal">{item.title}</span>
                  <span className="font-normal">{`(${categoryTotal})`}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {finalizePurchase && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 text-gray-950 flex-col shadow-md justify-center items-start p-4 w-80 rounded">
            <h1 className="text-lg font-semibold mb-2">Lembrete</h1>
            <p>O valor mínimo para finalizar a compra é de R$ 149,90.</p>
            <button
              className="cursor-pointer mt-4 bg-gray-300 hover:bg-gray-400 rounded-sm p-2 font-semibold"
              type="button"
              onClick={() => setFinalizePurchase(false)}
            >
              Fechar
            </button>
          </div>
        )}

        <button
          type="button"
          onClick={handleFinalizePurchase}
          className="bg-green-500 hover:bg-green-600 w-full text-center uppercase py-4 lg:py-4 lg:px-4 lg:rounded-b cursor-pointer font-semibold lg:mb-4 shadow-md leading-5"
        >
          Finalizar a compra
        </button>
      </div>
    </>
  );
}

export default CartSummary;
