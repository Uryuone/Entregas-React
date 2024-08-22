import { addDoc, collection } from 'firebase/firestore';
import db from '../db/db.js';

const productos = [
  {
    id: 'P001',
    nombre: 'Smartphone X200',
    descripcion: 'El Smartphone X200 cuenta con una pantalla de alta resolución y una batería de larga duración.',
    precio: 499,
    categoria: 'electronics',
    stock: 20,
    imagen: 'https://m.media-amazon.com/images/I/716OmvUFy1L._AC_SL1500_.jpg',
  },
  {
    id: 'P002',
    nombre: 'Cafetera Automática',
    descripcion: 'Disfruta del mejor café en casa con esta cafetera automática con funciones programables.',
    precio: 150,
    categoria: 'home',
    stock: 15,
    imagen: 'https://ostercl.vtexassets.com/arquivos/ids/165423-800-auto?v=638313644829470000&width=800&height=auto&aspect=true',
  },
  {
    id: 'P003',
    nombre: 'Cámara Reflex D5200',
    descripcion: 'Captura cada momento con calidad profesional usando la Cámara Reflex D5200.',
    precio: 700,
    categoria: 'electronics',
    stock: 10,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUFOlaLVdWCgcytbzEMTg58_JMvxbmHmO5aQ&s',
  },
  {
    id: 'P004',
    nombre: 'Sofá de Cuero',
    descripcion: 'Sofá de cuero de alta calidad, perfecto para añadir un toque elegante a tu sala de estar.',
    precio: 1200,
    categoria: 'home',
    stock: 5,
    imagen: 'https://decoq.cl/wp-content/uploads/2023/03/1-PM40.jpg',
  },
  {
    id: 'P005',
    nombre: 'Zapatos Deportivos AirMax',
    descripcion: 'Zapatos deportivos cómodos y modernos, ideales para cualquier actividad física.',
    precio: 120,
    categoria: 'clothing',
    stock: 30,
    imagen: 'https://nikeclprod.vtexassets.com/arquivos/ids/905923/DM9537_105_A_PREM.jpg?v=638381714985600000',
  },
  {
    id: 'P006',
    nombre: 'Televisor 4K Ultra HD',
    descripcion: 'Sumérgete en una experiencia visual única con este televisor 4K Ultra HD de 55 pulgadas.',
    precio: 900,
    categoria: 'electronics',
    stock: 8,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_689880-MLU72492882226_102023-O.webp',
  },
  {
    id: 'P007',
    nombre: 'Reloj Inteligente FitWatch',
    descripcion:
      'Monitoriza tu salud y estado físico con el nuevo FitWatch, un reloj inteligente de última generación.',
    precio: 250,
    categoria: 'electronics',
    stock: 25,
    imagen: 'https://static.wixstatic.com/media/c22c23_ee8bc28108d44d34b0ed1b312845667f~mv2.jpg/v1/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_ee8bc28108d44d34b0ed1b312845667f~mv2.jpg',
  },
  {
    id: 'P008',
    nombre: 'Mesa de Comedor de Madera',
    descripcion: 'Mesa de comedor de madera maciza, perfecta para reuniones familiares.',
    precio: 800,
    categoria: 'home',
    stock: 7,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsMJWTOFNp0Oakyj6p6rCbKtDB8Dqk176lFw&s',
  },
  {
    id: 'P009',
    nombre: 'Chaqueta Impermeable',
    descripcion: 'Chaqueta impermeable ligera y resistente, ideal para días de lluvia.',
    precio: 85,
    categoria: 'clothing',
    stock: 18,
    imagen: 'https://contents.mediadecathlon.com/p2583873/k$896e054ddb3377d4b2227e4e05a9da6b/chaqueta-impermeable-de-senderismo-montana-mh150-hombre.jpg?format=auto&quality=40&f=800x800',
  },
  {
    id: 'P010',
    nombre: 'Lámpara de Pie Moderna',
    descripcion: 'Lámpara de pie con diseño moderno, ideal para iluminar y decorar tu hogar.',
    precio: 130,
    categoria: 'home',
    stock: 12,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_602658-MLC50320493546_062022-O.webp',
  },
];

const seedProducts = () => {
  productos.map(({ id, ...rest }) => {
    const productosRef = collection(db, 'productos');
    addDoc(productosRef, rest);
  });

  console.log('productos subidos correctamente');
};

seedProducts();