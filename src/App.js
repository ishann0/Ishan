import React from 'react';
import './App.css';
import Home from "./MyApp/Pages/HomePage";
import Item1 from './MyApp/Pages/Item1'
import Item2 from './MyApp/Pages/Item2'
import Item3 from './MyApp/Pages/Item3'
import About from './MyApp/Pages/AboutPage';
import Header from "./MyApp/Header";
import Contact from "./MyApp/Pages/ContactPage";
import Footer from "./MyApp/Footer";
import {
  BrowserRouter,
  Routes,Route

} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      
<Routes>
<Route path='/' exact={true} element= {<Home/>}/>
<Route path='/About' element= {<About/>} />
<Route path ='/Contact' element= {<Contact/>} />
<Route path = '/Item1' element = {< Item1/>}/>
<Route path = '/Item2' element = {< Item2/>}/>
<Route path = '/Item3' element = {< Item3/>}/>

</Routes>

    <Footer/>
    </BrowserRouter>
 );
}

export default App;
