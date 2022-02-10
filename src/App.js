import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Domains from './components/Domains';
import Footer from './components/Footer';
//bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const App = () => {
return (
        <> 
       <Navbar></Navbar>
       <Home></Home>
       <Aboutus/>
       <Domains/>
       <Footer/>
       </>
)
}

export default App;