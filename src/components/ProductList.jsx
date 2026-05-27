import ProductCard from './ProductCard';

function ProductList({ products, onRemove }) {
  return (
    <>
      {products.length === 0 ? (
        <p>No products are currently in stock.</p>
      ) : (
        products.map(product => (
          <ProductCard key={product.id} product={product} onRemove={onRemove} />
        ))
      )}
    </>
  );
}

export default ProductList;