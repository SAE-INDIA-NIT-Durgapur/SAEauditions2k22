import './App.css';
import {React,useState} from 'react'
import Navbar from './components/Navbar';

import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Domains from './components/Domains';
import Footer from './components/Footer';
import Error from './components/Error';
import Question from './components/question/Question';
import ScrollToTop from "react-scroll-to-top";


//bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

//router
import {
        BrowserRouter as Router,
        Routes,
        Route,
        Link
      } from "react-router-dom";
import Thankyou from './components/Thankyou';

const App = () => {
        
return (

        <>
       <ScrollToTop smooth />
    
        <Routes>
        
                <Route to exact path="/" element={
                        <>
                      
                          <Navbar ></Navbar>
                        <Home ></Home>
                         <Aboutus/>
                        <Domains/>
                        <Footer/>
                        </>
                }/>
                <Route to exact path='/questions' element={
                        <>
                      <Question/>
                        </>
                }/>
                <Route to exact path="*" element={
                        <>
                        <Navbar ></Navbar>
                        <Error/>
                        <Footer/>
                        </>
                }/>
                <Route to exact path="/thankyou-page" element={
                        <>
                        <Navbar ></Navbar>
                        <Thankyou/>
                        <Footer/>
                        </>
                }/>
       </Routes>
       </>
)
}

export default App;