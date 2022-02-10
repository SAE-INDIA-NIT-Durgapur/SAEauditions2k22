import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
//bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = () => {
return (
        <> 
       <Navbar></Navbar>
       <Home></Home>
       </>
)
}

export default App;