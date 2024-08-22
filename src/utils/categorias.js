import { getDocs, collection } from 'firebase/firestore';
import db from '../db/db.js';

const getAllCategories = async () => {
  try {
    const productosRef = collection(db, 'productos');
    const dataDb = await getDocs(productosRef);

    // Extraer todas las categorías y eliminar duplicados
    const categorias = [...new Set(dataDb.docs.map((productDb) => productDb.data().categoria))];

    console.log('Categorías disponibles:', categorias);
    return categorias;
  } catch (error) {
    console.log('Error al obtener las categorías:', error);
    return [];
  }
};

getAllCategories();
