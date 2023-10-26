
import { useState, useEffect } from 'react';
import ItemCount from './ItemCount';
import CircularProgress from '@mui/material/CircularProgress';
import { db } from '../firebase';


// Mock de datos de productos
const listaDeAnimes = [
    {
      id: 1,
      title: 'Full Metal Alchemist',
      description: 'Descripción del producto 1',
      price: 19.99,
      stock: 8,
      pictureUrl: 'https://m.media-amazon.com/images/I/61GWN9NPJvL._AC_UF1000,1000_QL80_.jpg',
      genres: ['Acción', 'Aventura', 'Fantasía', 'Drama', 'Sobrenatural', 'Magia'],
    },
    {
      id: 2,
      title: 'Mob Psycho',
      description: 'Descripción del producto 2',
      price: 29.99,
      stock: 12,
      pictureUrl: 'https://m.media-amazon.com/images/I/A1AUygBZJtL._AC_UF1000,1000_QL80_.jpg',
      genres: ['Comedia', 'Acción', 'Sobrenatural', 'Escolar', 'Vida Diaria', 'Psicológico'],
    },
    {
      id: 3,
      title: 'Assassination Classroom',
      description: 'Descripción del producto 3',
      price: 24.99,
      stock: 10,
      pictureUrl: 'https://images.cdn1.buscalibre.com/fit-in/360x360/b9/ba/b9ba5f7507e05bbad49e2fdfbd228eab.jpg',
      genres: ['Comedia', 'Acción', 'Escolar', 'Shonen', 'Ciencia Ficción', 'Sobrenatural'],
    },
    {
      id: 4,
      title: 'Bleach',
      description: 'Descripción del producto 4',
      price: 14.99,
      stock: 15,
      pictureUrl: 'https://m.media-amazon.com/images/I/710bN4rwtmL._AC_UF1000,1000_QL80_.jpg',
      genres: ['Acción', 'Aventura', 'Sobrenatural', 'Shonen'],
    },
    {
      id: 5,
      title: 'Haikyuu!!',
      description: 'Descripción del producto 5',
      price: 34.99,
      stock: 7,
      pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_989913-MLA46522908939_062021-O.webp',
      genres: ['Deportes', 'Escolar', 'Comedia', 'Shonen'],
    },
    {
      id: 6,
      title: 'Jigokuraku',
      description: 'Descripción del producto 6',
      price: 22.99,
      stock: 18,
      pictureUrl: 'https://www.normaeditorial.com/upload/media/albumes/0001/07/c8433c899e4bbca8535eda3f362abd3d1f0fca03.jpeg',
      genres: ['Acción', 'Aventura', 'Drama', 'Sobrenatural', 'Historia'],
    },
    {
      id: 7,
      title: 'Jujutsu Kaisen',
      description: 'Descripción del producto 7',
      price: 17.49,
      stock: 9,
      pictureUrl: 'https://www.normaeditorial.com/upload/media/albumes/0001/07/thumb_6547_albumes_big.jpeg',
      genres: ['Acción', 'Sobrenatural', 'Magia', 'Shonen'],
    },
    {
      id: 8,
      title: 'Kimetsu no Yaiba',
      description: 'Descripción del producto 8',
      price: 27.99,
      stock: 11,
      pictureUrl: 'https://images.cdn1.buscalibre.com/fit-in/360x360/33/c7/33c7fb4fa71eef7cb0b6cef5f7ad5b14.jpg',
      genres: ['Acción', 'Sobrenatural', 'Demonios', 'Shonen'],
    },
    {
      id: 9,
      title: 'Kami no Tou',
      description: 'Descripción del producto 9',
      price: 19.99,
      stock: 13,
      pictureUrl: 'https://m.media-amazon.com/images/I/61ZgHuxC55S._AC_UF1000,1000_QL80_.jpg',
      genres: ['Acción', 'Aventura', 'Sobrenatural', 'Misterio'],
    },
    {
      id: 10,
      title: 'Made in Abyss',
      description: 'Descripción del producto 10',
      price: 31.99,
      stock: 14,
      pictureUrl: 'https://m.media-amazon.com/images/I/81QOrTaYVUL._AC_UF1000,1000_QL80_.jpg',
      genres: ['Aventura', 'Fantasía', 'Drama'],
    },
    {
      id: 11,
      title: 'One Punch Man',
      description: 'Descripción del producto 11',
      price: 25.99,
      stock: 5,
      pictureUrl: 'https://ramenparados.com/wp-content/uploads/2015/06/normal_One_Punch_Man_11.jpg',
      genres: ['Acción', 'Comedia', 'Ciencia Ficción', 'Superpoderes'],
    },
    {
      id: 12,
      title: 'Shingeki no Kyojin',
      description: 'Descripción del producto 12',
      price: 16.99,
      stock: 20,
      pictureUrl: 'https://m.media-amazon.com/images/I/51QWSFImgvL.jpg',
      genres: ['Acción', 'Drama', 'Fantasía', 'Superpoderes', 'Shonen'],
    },
    {
      id: 13,
      title: 'Steins;Gate',
      description: 'Descripción del producto 13',
      price: 23.99,
      stock: 6,
      pictureUrl: 'https://pageone.cl/cdn/shop/products/Steins_GateZero01-IvreaES-Manga_1280x.jpg?v=1611248333',
      genres: ['Ciencia Ficción', 'Thriller', 'Psicológico', 'Viajes en el Tiempo'],
    },
    {
      id: 14,
      title: 'Tate no Yuusha no Nariagari',
      description: 'Descripción del producto 14',
      price: 20.49,
      stock: 16,
      pictureUrl: 'https://pm1.aminoapps.com/6990/2af0a84cc4a6bc87a5795c12f2453586176486fdr1-1400-1994v2_uhq.jpg',
      genres: ['Acción', 'Aventura', 'Fantasía'],
    },
    {
      id: 15,
      title: 'Tokyo Revengers',
      description: 'Descripción del producto 15',
      price: 28.99,
      stock: 4,
      pictureUrl: 'https://cdn.verasia.eu/19242/tokyo-revengers-vol-1.jpg',
      genres: ['Acción', 'Drama', 'Escolar', 'Ciencia Ficción', 'Thriller'],
    },
    // Agrega más productos aquí...
  ];

  const ItemList = ({ selectedGenre }) => {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      if (listaDeAnimes.length === 0) {
        console.error('No hay datos en listaDeAnimes para cargar en Firebase.');
        return;
      }
  
      // Cargamos los datos de listaDeAnimes a Firebase Firestore
      const animesCollection = db.collection('animes');

      // Realizamos una carga inicial para evitar duplicados
      animesCollection.get().then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          listaDeAnimes.forEach((anime) => {
            animesCollection.add(anime)
              .then((docRef) => {
                console.log('Documento agregado con ID:', docRef.id);
              })
              .catch((error) => {
                console.error('Error al agregar documento:', error);
              });
          });
        }
      });
  
      // Simula un llamado asincrónico a los datos después de 2 segundos
      setTimeout(() => {
        setItems(listaDeAnimes);
        setIsLoading(false);
      }, 2000);
    }, []);
  
    const showDetails = (itemId) => {
      setSelectedItem(itemId);
    };
  
    const closeDetails = () => {
      setSelectedItem(null);
    };
  

    
    const filteredAnimes = selectedGenre
      ? items.filter((item) => item.genres.includes(selectedGenre))
      : items;
  
    return (
      <div className="item-list">
        {isLoading ? (
          <CircularProgress />
        ) : (
          filteredAnimes.map((item) => (
            <div key={item.id} className="product-item">
              <img className="product-image" src={item.pictureUrl} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>Precio: ${item.price}</p>
                <a href="#" onClick={() => showDetails(item.id)}>Ver detalles</a>
              </div>
              <div>
                <ItemCount stock={item.stock} onAdd={(count) => console.log(`Añadir ${count} ${item.title} al carrito`)} />
              </div>
              {selectedItem === item.id && (
                <div className="product-detail">
                  <h1>Detalles del producto</h1>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>Precio: ${item.price}</p>
                  <p>Otro detalle: Agrega tu información aquí</p>
                  <button onClick={closeDetails}>Cerrar detalles</button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default ItemList;





  