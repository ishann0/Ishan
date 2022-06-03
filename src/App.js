import React from 'react';
import './App.css';
// import Background from './MyApp/Assests/Images/';
import Home from "./MyApp/Pages/HomePage";
import Item1 from './MyApp/Pages/Item1'
import Item2 from './MyApp/Pages/Item2'
import Item3 from './MyApp/Pages/Item3'
import About from './MyApp/Pages/AboutPage';
import Header from "./MyApp/Header";
import Contact from "./MyApp/Pages/ContactPage";
import Footer from "./MyApp/Footer";
import Carousel from './MyApp/Components/Carousel';
import {
  BrowserRouter,
  Routes,Route

} from "react-router-dom";

function App() {
  return (
    <div className='Container'>
    <BrowserRouter>
      <Header />
      
<Routes>
<Route path='/' exact={true} element= {<Home/>}/>
<Route path='/About' element= {<About/>} />
<Route path ='/Contact' element= {<Contact/>} />
<Route path = '/Item1' element = {< Item1/>}/>
<Route path = '/Item2' element = {< Item2/>}/>
<Route path = '/Item3' element = {< Item3/>}/>
<Route path = '/Carousel' element = {< Carousel />}/>
</Routes>

    <Footer/>
    </BrowserRouter>
    </div>
 );
}

export default App;
