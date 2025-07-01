import React from "react";
import Product from "../Insertingcarts/Product";
import { Link } from "react-router-dom";

const Breakfast = () => {
    return(
        <div>

  <nav >
    <div className="logo">Break-Fast</div>

    <ul className="nav-links">
      <li><Link to="/home" className="text">Home</Link></li>
      <li><Link to="/dine"className="text">Dine-In</Link></li>
      <li><Link to="/delivery" className="text">Delivery</Link></li>
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul className="dropdown-menu">
         
            <li><Link className="dropdown-item" to="/breakfast">Break-Fast</Link></li>
            <li><Link className="dropdown-item" to="/starters">Starters</Link></li>
            <li><Link className="dropdown-item" to="/maincourse">Main-Course</Link></li>
            <li><Link className="dropdown-item" to="/italian">Italian</Link></li>
           
          </ul>
        </li>
      <li><Link to="/contact" className="text">Contact</Link></li>
    </ul>

    <div className="right-section">
      <input type="text" className="location-input" placeholder="Enter your location"/>
      <button className="cart-btn"><Link to="/carts" className="text1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg> Cart</Link></button>
    </div>
  </nav>
            <Product/>
        </div>
    );
}   

export default Breakfast;