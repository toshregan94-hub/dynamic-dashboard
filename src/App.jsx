import ProductList from './components/ProductList';
const products = [
  { id: 1, name: 'Laptop', price: 840, inStock: true },
  { id: 2, name: 'Phone', price: 500, inStock: true },
  { id: 3, name: 'Tablet', price: 200, inStock: false },
  { id: 4, name: 'Headphones', price:100, inStock: true },
];

function App(){
  return(
    <div>
      <ProductList products={products}/>
    </div>
  )

}
export default App;