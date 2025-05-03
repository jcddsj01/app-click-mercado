import React from 'react';

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between shadow-[0_-10px_50px_-12px_rgba(0,0,0,0.25)] mb-16 lg:mb-0 items-center w-full h-auto bg-gray-200 text-gray-950 py-4 px-10">
        <div className='flex flex-col justify-center items-start mb-4 md:mb-0'>
            <div className='w-32 h-16 lg:w-36 lg:h-20'>
                <img className='w-full h-full object-cover' src="/logo.png" alt="Logo do site Click Mercado" />
            </div>
            <p className="text-base">Seu supermercado online.</p>
        </div>
        
        <div className="flex flex-col items-end justify-center text-sm lg:text-base">
            <p className='font-semibold'>&copy; 2025 Click Mercado. Todos os direitos reservados.</p>
            <p>Desenvolvido por José Carlos – Desenvolvedor Full-Stack</p>
        </div>
    </footer>
  );
}

export default Footer;
