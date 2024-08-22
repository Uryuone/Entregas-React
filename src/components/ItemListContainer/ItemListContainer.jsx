import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import './itemListContainer.css';
import { ClimbingBoxLoader } from 'react-spinners';
import { getDocs, collection, query, where } from 'firebase/firestore';
import db from '../../db/db.js';
import Banner from '../Banner/Banner.jsx';

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const [estaCargando, setEstaCargando] = useState(false);
  const { idCategoria } = useParams();

  const getProducts = async () => {
    try {
      const productosRef = collection(db, 'productos');
      const dataDb = await getDocs(productosRef);

      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });

      console.log('Productos obtenidos:', data);
      setProductos(data);

      setEstaCargando(false);
      console.log('Finalizando carga');
    } catch (error) {
      console.log('Error al obtener los productos:', error);
      setEstaCargando(false);  // Asegúrate de que esto se llama también en caso de error
    }
  };

  const getProductsByCategory = async () => {
    try {
      const productosRef = collection(db, 'productos');
      const q = query(productosRef, where('categoria', '==', idCategoria));
      const dataDb = await getDocs(q);

      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });

      console.log('Productos filtrados por categoría:', data);
      setProductos(data);

      setEstaCargando(false);
      console.log('Finalizando carga por categoría');
    } catch (error) {
      console.log('Error al obtener los productos por categoría:', error);
      setEstaCargando(false);  // Asegúrate de que esto se llama también en caso de error
    }
  };

  useEffect(() => {
    setEstaCargando(true);
    console.log('Iniciando carga de productos');
    if (idCategoria) {
      getProductsByCategory();
    } else {
      getProducts();
    }
  }, [idCategoria]);

  return (
    <div>
      <Banner />
      <p>{saludo}</p>
      {console.log('Estado de carga:', estaCargando)}
      {estaCargando ? (
        <div>
          <ClimbingBoxLoader color="gray" />
        </div>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;
