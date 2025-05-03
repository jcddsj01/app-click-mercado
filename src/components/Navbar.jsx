import { useState, useEffect } from 'react';
import navLinks from '../constants/navLinks.js';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // rolando para baixo
      setShowNavbar(false);
    } else {
      // rolando para cima
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed z-30 top-0 left-0 w-full transition-transform duration-500 ease-in-out overflow-x-auto scroll-smooth
    ${showNavbar ? 'translate-y-0' : '-translate-y-full'} mt-20 flex items-center justify-between px-6 py-2 bg-gray-300 text-gray-900 shadow-md`}>
      <ul className="flex justify-start items-center gap-9 w-full cursor-pointer">
        {navLinks.map((item) => (
            <a href={`#${item.title.toLowerCase()}`}>
              <li
                key={item.title}
                className="flex flex-col gap-1 justify-center items-center cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-green-500"
              >
                  <img
                    className="w-9 h-9 object-cover transition-all ease-in-out duration-300 hover:scale-110"
                    src={item.icon}
                    alt={`Ícone de ${item.title}`}
                    />
                  <h1 className="text-sm text-center">{item.title}</h1>
              </li>
            </a>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
