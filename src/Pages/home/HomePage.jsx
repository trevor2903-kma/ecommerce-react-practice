import './HomePage.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from '../../components/Header.jsx'
import { ProductsGrid } from './ProductsGrid.jsx';

export function HomePage({ cart }) {

  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    axios.get('api/products')
      .then((res) => setProducts(res.data));
  }, [])

  return (
    <div>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <title>Ecommerce Project</title>

      <Header cart={cart}/>

      <div className="home-page">
        <ProductsGrid products={products}/>
      </div>
    </div>
  );
}