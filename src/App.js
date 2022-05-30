import React from 'react';
import './App.css';
import Home from "./MyApp/pages/HomePage";
import Item1 from './MyApp/pages/Item1'
import Item2 from './MyApp/pages/Item2'
import Item3 from './MyApp/pages/Item3'
import About from './MyApp/pages/AboutPage';
import Header from "./MyApp/Header";
import Contact from "./MyApp/pages/ContactPage";
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
