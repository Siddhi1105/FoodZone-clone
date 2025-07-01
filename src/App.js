import logo from './logo.svg';
import './App.css';
import Landing from './Landing/Landing.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Contact from './PageRouting/Contact.jsx';
import Home from './PageRouting/Home.jsx';
import Dine from './PageRouting/Dine.jsx';
import Delivery from './PageRouting/Delivery.jsx';
import Carts from './PageRouting/Carts.jsx';
import Breakfast from './Menu/Breakfast.jsx';
import Starters from './Menu/Starters.jsx';
import Maincourse from './Menu/Maincourse.jsx';
import Italian from './Menu/Italian.jsx'; 



function App() {
  return (
     <div>
      
      <Router>
     
     
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
         <Route path='/dine' element={<Dine/>}/>
          <Route path='/delivery' element={<Delivery/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/carts' element={<Carts/>}/>
        <Route path='/breakfast' element={<Breakfast/>}/>
        <Route path='/starters' element={<Starters/>}/>
        <Route path='/maincourse' element={<Maincourse/>}/>
        <Route path='/italian' element={<Italian/>}/>

      </Routes>
       </Router>
       
    </div>
  );
}

export default App;
