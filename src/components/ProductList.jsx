import ProductCard from './ProductCard';

function ProductList({ products }) {
  const inStockProducts = products.filter(p => p.inStock);

  return (
    <>
      {inStockProducts.length === 0 ? (
        <p>No products are currently in stock.</p>
      ) : (
        products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </>
  );
}

export default ProductList;
