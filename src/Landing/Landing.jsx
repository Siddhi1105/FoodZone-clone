import React from "react";
import { Link } from "react-router-dom";
import Home from "../PageRouting/Home";
import Dine from "../PageRouting/Dine"; 
import Delivery from "../PageRouting/Delivery";
import Contact from "../PageRouting/Contact";
import Carts from "../PageRouting/Carts";
import Breakfast from "../Menu/Breakfast";
import Starters from "../Menu/Starters";    
import Maincourse from "../Menu/Maincourse";
import Italian from "../Menu/Italian";
 // Assuming you have a CSS file for styling

function Landing() {
    return(
       
 <div>
  {/* <!-- Navbar --> */}
  <nav >
    <div className="logo">FoodZone</div>

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

  {/* <!-- Poster Section --> */}
  <div className="poster">
    <h1>Delicious Food Delivered Fast</h1>
  </div>

  {/* <!-- Cart Section --> */}
  <section className="cart-section">
    <div className="cart-item">
      <img src="https://ohsweetbasil.com/wp-content/uploads/four-cheese-margherita-pizza-recipe-4-scaled.jpg" alt="Pizza"/>
      <h3>Margherita Pizza</h3>
      <p>Classic cheese pizza with fresh basil and tomato sauce</p>
      <div className="price">₹250</div>
      <button className="cart-btn">Add to cart</button>
    </div>

    <div className="cart-item">
      <img src="https://th.bing.com/th/id/OIP.s07UsAo90pfNbIUBM-OTbAHaHa?rs=1&pid=ImgDetMain" alt="Burger"/>
      <h3>Veggie Burger</h3>
      <p>Grilled vegetable patty with fresh lettuce and sauce</p>
      <div className="price">₹180</div>
      <button className="cart-btn">Add to cart</button>

    </div>

    <div className="cart-item">
      <img src="https://www.alyonascooking.com/wp-content/uploads/2018/01/chow-mein-Asian-noodles-12.jpg" alt="Noodles"/>
      <h3>Hakka Noodles</h3>
      <p>Spicy stir-fried noodles with veggies</p>
      <div className="price">₹200</div>
      <button className="cart-btn">Add to cart</button>

    </div>
  </section>
  </div>


    );
}

export default Landing;