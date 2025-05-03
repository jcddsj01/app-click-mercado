import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import CartSummary from "./CartSummary.jsx";
import { useCart } from "../contexts/CartContext.jsx";

const ProductCarousel = ({ products, category }) => {
  const { addToCart } = useCart();

  const scrollContainerRef = useRef(null);
  const scrollAmount = 300;
  const [showButtons, setShowButtons] = useState(true);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const updateScrollButtons = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;

      setAtStart(scrollLeft <= 0);
      setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", updateScrollButtons);
      }
    };
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setShowButtons(width >= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const goToPrevious = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const goToNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <CartSummary />

      <div className="relative mt-4 mb-10 mx-4 md:mx-12">
      <h1 className="mb-2 text-xl font-semibold text-gray-800">{category}</h1>
      <div className="flex items-center relative">
        {showButtons && !atStart && (
          <button
            type="button"
            onClick={goToPrevious}
            className="cursor-pointer absolute -left-8 text-green-500 font-bold rounded-[4px] h-20 w-12 hover:bg-green-500/20 transition-all duration-300"
          >
            <ChevronLeft className="w-8 h-8 mx-auto" strokeWidth={2.5} />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          className={`flex scroll-smooth space-x-4 md:px-2 py-2 w-full overflow-x-auto ${
            showButtons ? "overflow-x-hidden" : "overflow-x-auto"
          }`}
        >
          {products.map((product) => (
            <div
              key={product.title}
              className="flex-shrink-0 rounded-[4px] overflow-hidden shadow-md w-40 md:w-52"
            >
              <img
                src={product.image}
                alt={`Imagem de ${product.title}`}
                className="p-2 rounded-[10px] w-full h-32 md:h-44 object-cover"
              />
              <div className="flex justify-between items-center p-2">
                <div className="flex flex-col justify-center items-start">
                  <h2 className="text-base md:text-lg font-semibold text-gray-800">
                    {product.title}
                  </h2>
                  <p className="text-sm md:text-base font-bold text-gray-900">
                    {typeof product.price === 'number'
                    ? product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : product.price}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    addToCart({
                      ...product,
                      category,
                      quantity: 1
                    })
                  }
                  className="p-1 md:p-2 border cursor-pointer hover:bg-orange-100 border-orange-500 rounded-[4px]"
                >
                  <Plus className="text-orange-500" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {showButtons && !atEnd && (
          <button
            type="button"
            onClick={goToNext}
            className="cursor-pointer absolute -right-10 text-green-500 font-bold rounded-[4px] h-20 w-12 hover:bg-green-500/20 transition-all duration-300"
          >
            <ChevronRight className="w-8 h-8 mx-auto" strokeWidth={2.5} />
          </button>
        )}
      </div>
    </div>
    </div>
  );
};

export default ProductCarousel;
