import Brand from "./Brand"
import CartContainer from "./CartContainer"
import CategoryItems from "./CategoryItems"
import MenuButton from './MenuButton';



const Navbar = () => {

    return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" style={{backgroundColor: "#D7F0F8"}}>
  <Brand />
  <MenuButton />
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"         style={{
    backgroundColor: "#007bff", // Color de fondo predeterminado
    // Otros estilos predeterminados
    padding: "10px",
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.backgroundColor = "#47ADD1"; // Cambio de color al pasar el mouse
    // Puedes cambiar otros estilos aquí si es necesario
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.backgroundColor = "#007bff"; // Restaurar color original al salir del hover
    // Puedes restaurar otros estilos aquí si es necesario
  }}>
          <CategoryItems isActive={true} name="CLÁSICOS" />
        
        </li>
        <li className="nav-item "
        style={{
    backgroundColor: "#007bff", // Color de fondo predeterminado
    // Otros estilos predeterminados
    padding: "10px",
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.backgroundColor = "#47ADD1"; // Cambio de color al pasar el mouse
    // Puedes cambiar otros estilos aquí si es necesario
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.backgroundColor = "#007bff"; // Restaurar color original al salir del hover
    // Puedes restaurar otros estilos aquí si es necesario
  }}
>
          <CategoryItems isActive={false} name="Shonen" className="bg-primary" />
        
        </li>
        <li className="nav-item"         style={{
    backgroundColor: "#007bff", // Color de fondo predeterminado
    // Otros estilos predeterminados
    padding: "10px",
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.backgroundColor = "#47ADD1"; // Cambio de color al pasar el mouse
    // Puedes cambiar otros estilos aquí si es necesario
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.backgroundColor = "#007bff"; // Restaurar color original al salir del hover
    // Puedes restaurar otros estilos aquí si es necesario
  }}>
          <CategoryItems isActive={false} name="Seinen" className="bg-primary"/>
        
        </li>
        <li className="nav-item"         style={{
    backgroundColor: "#007bff", // Color de fondo predeterminado
    // Otros estilos predeterminados
    padding: "10px",
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.backgroundColor = "#47ADD1"; // Cambio de color al pasar el mouse
    // Puedes cambiar otros estilos aquí si es necesario
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.backgroundColor = "#007bff"; // Restaurar color original al salir del hover
    // Puedes restaurar otros estilos aquí si es necesario
  }}>
          <CategoryItems isActive={false} name="Slice of life" className="bg-primary"/>
        
        </li>
        <li className="nav-item"         style={{
    backgroundColor: "#007bff", // Color de fondo predeterminado
    // Otros estilos predeterminados
    padding: "10px",
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.backgroundColor = "#47ADD1"; // Cambio de color al pasar el mouse
    // Puedes cambiar otros estilos aquí si es necesario
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.backgroundColor = "#007bff"; // Restaurar color original al salir del hover
    // Puedes restaurar otros estilos aquí si es necesario
  }}>
          <CategoryItems isActive={false} name="Isekai" className="bg-primary"/>
        
        </li>


      </ul>



    </div>
    <CartContainer />
    </div>
</nav>
    )
}


export default Navbar;