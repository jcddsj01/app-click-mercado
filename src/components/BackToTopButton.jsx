import { ArrowUp } from 'lucide-react'
import React, { useEffect, useState } from 'react';

function BackToTopButton() {
    const [showButton, setShowButton] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
          setWindowWidth({
            width: window.innerWidth,
          });
        }
    
        window.addEventListener('resize', handleResize);
    
        // Chamada inicial para garantir valores corretos
        handleResize();
    
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowButton(currentScrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button type='button' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`fixed right-8 bottom-20 lg:bottom-8 shadow-md flex flex-col justify-center items-center cursor-pointer bg-green-500 hover:bg-green-600 text-gray-50 rounded-full w-14 h-14 lg:w-20 lg:h-20 p-2 z-50
        ${showButton ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
            <ArrowUp className='w-6 h-6' strokeWidth={2.5} />
            <span className={`text-sm text-center leading-none`}>
                {windowWidth.width > 1024 ?
                (<>Voltar<br /> ao topo</>) : ('')}
            </span>   
        </button>
    );
};

export default BackToTopButton;