import React, { useState, useEffect } from 'react';

function ProductAdvertising() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productsAdvertising = [
    { title: 'Alimentação', icon: "/images/home/propaganda/alimentacao.png" },
    { title: 'Bebidas', icon: "/images/home/propaganda/bebidas.png" },
    { title: 'Higiene', icon: "/images/home/propaganda/higiene.png" },
    { title: 'Limpeza', icon: "/images/home/propaganda/limpeza.png" },
    { title: 'Pets', icon: "/images/home/propaganda/pets.png" },
    { title: 'Suplementos', icon: "/images/home/propaganda/suplementos.png" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productsAdvertising.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col mt-40 lg:mt-36">
      <div className="flex flex-col justify-center items-center">
        <img
          src={productsAdvertising[currentImageIndex].icon}
          alt={`Imagem de ${productsAdvertising[currentImageIndex].title}`}
        />
        <div className="flex justify-center items-center bg-orange-500/40 gap-2 rounded-[2px] h-8 px-4 w-auto" style={{ transform: 'translateY(-40px)' }}>
          {productsAdvertising.map((item, index) => (
            <button
              key={item.title}
              className="cursor-pointer"
              type="button"
              onClick={() => setCurrentImageIndex(index)}
            >
              <span
                className={`flex justify-center items-center w-2 h-2 rounded-full p-2
                ${currentImageIndex === index ? 'bg-green-500' : 'bg-green-500/40'}`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductAdvertising;
