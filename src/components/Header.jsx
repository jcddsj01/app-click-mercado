import LogoClickMercado from '../../public/logo.png';

function Header() {
    return (
        <header className="fixed top-0 w-full bg-gray-200 px-6 z-40">
            <div className='relative flex justify-between items-center'>
                <div className='w-36 h-20'>
                    <img className='w-full h-full object-cover' src={LogoClickMercado} alt="Logo do site Click Mercado" />
                </div>
            </div>
        </header>
    )
}

export default Header;