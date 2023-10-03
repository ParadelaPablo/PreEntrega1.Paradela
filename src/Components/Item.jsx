


const Item = ({ item }) => {
    return (
      <div className="item">
        <img src={item.pictureUrl} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>Precio: ${item.price}</p>
        <a href={`/product/${item.id}`}>Ver detalles</a>
      </div>
    );
  };
  
  export default Item;
  