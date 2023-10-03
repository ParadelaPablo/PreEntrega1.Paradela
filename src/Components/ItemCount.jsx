import { useState } from "react";

const ItemCount = ({stock, onAdd}) => {
    
    const [count, setCount] = useState(0);
    
    const IncreaseCount = () => {
        if (count < stock)
        setCount(count + 1);

    };

    const DecreaseCount = () => {
        setCount(count - 1);

    };

    const handleAddClick = () => {
        if (count > 0) {
          onAdd(count); // Llamar al callback onAdd con la cantidad seleccionada
          setCount(0); // Reiniciar el contador después de agregar al carrito
        }
    };

return (
    <div>
      <span className="item-count-container">
        <button onClick={DecreaseCount} >-</button>
        <h1>{count}</h1>
        <button onClick={IncreaseCount} >+</button>
      </span>
      <br />
      <button onClick={handleAddClick} style={{ marginTop: "10px" }}>
        Agregar al carrito
      </button>
    </div>

    );
};

export default ItemCount