import React from 'react';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';

function App() {
  const categories = ["Electrónica", "Hogar", "Ropa"]; // Categorías

  return (
    <div className="App">
      <NavBar categories={categories} />
      <ItemListContainer greeting="¡Bienvenido a EcoShop!" />
    </div>
  );
}

export default App;
