import ProductCarousel from "../ProductCarousel.jsx";

function Bebidas() {
    const bebidasProducts = [
        { title: 'Água Mineral', price: 6.99, image: "/images/products/bebidas/agua-mineral.jpg" },
        { title: 'Chá', price: 11.99, image: "/images/products/bebidas/cha.jpg" },
        { title: 'Leite', price: 7.89, image: "/images/products/bebidas/leite.jpg" },
        { title: 'Refrigerante', price: 9.99, image: "/images/products/bebidas/refrigerante.jpg" },
        { title: 'Vinho', price: 37.98, image: "/images/products/bebidas/vinho.jpg" },
        { title: 'Cerveja', price: 32.99, image: "/images/products/bebidas/cerveja.jpg" },
      ];

    return <ProductCarousel category="Bebidas" products={bebidasProducts} />;
}

export default Bebidas;
