import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getItems } from './Item';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getItems(categoryId).then(fetchedItems => {
      setItems(fetchedItems);
    });
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <div className="product-list">
        {items.map(item => (
          <div key={item.id} className="product-card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <Link to={`/item/${item.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
