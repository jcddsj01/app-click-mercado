import ProductCarousel from "../ProductCarousel.jsx";

function Alimentos() {
    const alimentosProducts = [
        { title: 'Arroz Branco', price: 12.90, image: "/images/products/alimentos/arroz-branco.webp" },
        { title: 'Macarrão', price: 4.49, image: "/images/products/alimentos/macarrao.webp" },
        { title: 'Feijão Carioca', price: 7.19, image: "/images/products/alimentos/feijao-carioca.webp" },
        { title: 'Azeite de Oliva', price: 43.90, image: "/images/products/alimentos/azeite-de-oliva.webp" },
        { title: 'Molho de Tomate', price: 5.29, image: "/images/products/alimentos/molho-de-tomate.webp" },
        { title: 'Feijão Preto', price: 7.99, image: "/images/products/alimentos/feijao-preto.webp" },
        { title: 'Sal', price: 9.99, image: "/images/products/alimentos/sal.webp" },
        { title: 'Manteiga', price: 9.49, image: "/images/products/alimentos/manteiga.webp" },
        { title: 'Açucar', price: 8.59, image: "/images/products/alimentos/acucar.webp" },
        { title: 'Café', price: 15.99, image: "/images/products/alimentos/cafe.webp" },
      ];

    return <ProductCarousel category="Alimentos" products={alimentosProducts}  />;
}

export default Alimentos;
