import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
      
    <nav>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/startovnilistina">Startovni listina</Link></li>
      <li><Link to="/registrace">Registrace</Link></li>
      </ul>
      
    </nav>
    );
  };
  
  export default Navbar;