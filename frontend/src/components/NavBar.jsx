import './NavBar.css'

const Navbar = () => {
    return (
      
      <nav className="navbar">
          <a>Datum</a>
          <a>Pocet zavodniku</a>
          <a href='./Registration.jsx'>Registrace</a>
          <a href=''>Startovni listina</a>
          <a>Misto konani</a>
      </nav>
    );
  };
  
  export default Navbar;