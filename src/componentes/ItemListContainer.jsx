import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <h2 className="mt-4">{greeting}</h2>
      {/* Aquí podrías agregar más contenido o funcionalidad según sea necesario */}
    </div>
  );
};

export default ItemListContainer;
