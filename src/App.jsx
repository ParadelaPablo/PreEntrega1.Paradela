
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import ItemList from './Components/ItemList';
import FilterByGenre from './Components/Select';
import { useState } from 'react';


function App() {
  const [selectedGenre, setSelectedGenre] = useState('');


  const handleGenreChange = (newGenre) => {
    setSelectedGenre(newGenre);
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<ItemListContainer />}/>
        {/* Define tus otras rutas aquí */}
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="category/:categoryId" element={<ItemList />} />

      </Routes>

      <div>
        
        <ItemListContainer greeting="Hola Mundo" />
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        <div> 
        <FilterByGenre selectedGenre={selectedGenre} onChange={handleGenreChange} />

          </div>
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ItemList selectedGenre={selectedGenre} />

        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
