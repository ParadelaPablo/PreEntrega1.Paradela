


const generos = [
  'Acción',
  'Aventura',
  'Fantasía',
  'Drama',
  'Sobrenatural',
  'Magia',
  'Comedia',
  'Escolar',
  'Vida Diaria',
  'Psicológico',
  'Shonen',
  'Ciencia Ficción',
  'Demonios',
  'Misterio',
  'Superpoderes',
  'Thriller',
  'Viajes en el Tiempo'
];

const FilterByGenre = ({ selectedGenre, onChange }) => {
    const handleChange = (e) => {
      const selectedGenre = e.target.value;
      onChange(selectedGenre);
    };
  
    return (
      <div>
        <label htmlFor="genre">Filtrar por género:</label>
        <select value={selectedGenre} onChange={handleChange}>
          <option value="">Todos</option>
          {generos.map((genero) => (
            <option key={genero} value={genero}>
              {genero}
            </option>
          ))}
        </select>
      </div>
    );
  }
  

export default FilterByGenre;

