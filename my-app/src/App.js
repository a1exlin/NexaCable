import logo from './img/logo.jpeg';
import './App.css';
import Nav from './components/navbar'
import About from './components/about'
import Contact from './components/contact'
import Testimonials from './components/testimonials';
import Home from './components/home'
import Services from './components/services'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
  <img src={logo} alt-="NexaCable Logo" className='navbarLogo'/>


  <Router>
    
<Nav/>
<Home/>
<About/> 
<Services/>
<Testimonials/> 
<Contact/>

  

  </Router>

    </div>
  );
}

export default App;
