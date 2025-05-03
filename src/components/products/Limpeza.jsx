import ProductCarousel from "../ProductCarousel.jsx";

function Limpeza() {
    const limpezaProducts = [
        { title: 'Esponja', price: 3.99, image: "/images/products/limpeza/esponja.jpg" },
        { title: 'Pano de Pia', price: 15.99, image: "/images/products/limpeza/pano-de-pia.jpg" },
        { title: 'Detergente', price: 4.99, image: "/images/products/limpeza/detergente.jpg" },
        { title: 'vassoura', price: 19.29, image: "/images/products/limpeza/vassoura.jpg" },
        { title: 'Escova Multiuso', price: 17.39, image: "/images/products/limpeza/escova-multiuso.jpg" },
        { title: 'Pá de lixo', price: 15.19, image: "/images/products/limpeza/pa-de-lixo.jpg" },
        { title: 'Sabão em Barra', price: 3.99, image: "/images/products/limpeza/sabao-em-barra.jpg" },
      ];

    return <ProductCarousel category="Limpeza" products={limpezaProducts} />;
}

export default Limpeza;
