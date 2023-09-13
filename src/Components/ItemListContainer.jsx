


const ItemListContainer = ({greeting}) => {

    return (
        <div className="container"   style={{
            display: "flex",               // Para centrar horizontalmente
            justifyContent: "center",     // Centrado horizontal
            alignItems: "center",         // Centrado vertical
            border: "2px solid black",  // Borde de 2 píxeles en color negro
            padding: "20px",               // Espaciado interno
            fontSize: "54px", 
            marginTop: "45px"             // Tamaño de fuente aumentado
            // Otros estilos que desees aplicar al div
          }}>{greeting}</div>
    )
}

export default ItemListContainer