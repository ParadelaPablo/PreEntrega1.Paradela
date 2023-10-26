import Brand from "./Brand"
import CartContainer from "./CartContainer"




const Navbar = () => {

    return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" style={{backgroundColor: "#D7F0F8"}}>
  <Brand />
 
    <CartContainer />
    </div>
</nav>
    )
}


export default Navbar;