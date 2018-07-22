import React from 'react';
import CatalogPage from './CatalogPage';
import products from '../constants/Products';

function App() {
  return <CatalogPage products={products} />;
}

export default App;
