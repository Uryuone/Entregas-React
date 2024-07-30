import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from './Item';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem(itemId).then(fetchedItem => {
      setItem(fetchedItem);
    });
  }, [itemId]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item-detail-container">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Category: {item.category}</p>
      <p>Price: ${item.price}</p>
      {/* Agrega más detalles del producto si es necesario */}
    </div>
  );
};

export default ItemDetailContainer;
