import ProductAdvertising from '../components/ProductAdvertising.jsx';  
import Alimentos from '../components/products/Alimentos.jsx';
import Limpeza from '../components/products/Limpeza.jsx';
import Bebidas from '../components/products/Bebidas.jsx';
import Header from '../components/Header.jsx';
import Navbar from '../components/Navbar.jsx';
import BackToTopButton from '../components/BackToTopButton.jsx';
import Footer from '../components/Footer.jsx';
import { CartProvider } from '../contexts/CartContext.jsx';

function Home() {
    return (
        <>  
            <Header />
            <Navbar />
            <ProductAdvertising />
            <CartProvider>
                <section id="alimentos">
                    <Alimentos />
                </section>
                <section id="limpeza">
                    <Limpeza />
                </section>
                <section id="bebidas">
                    <Bebidas />
                </section>
            </CartProvider>
            <BackToTopButton />
            <Footer />
        </>
    );
};

export default Home;
