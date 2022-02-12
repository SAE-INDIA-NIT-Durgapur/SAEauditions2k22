import React, { useState,useEffect } from 'react'
import "../CSS/Navbar.css"
import logo from '../assets/sae_logo.png'




const Navbar = () => {
  
   

  return (
  
    <nav className="navbar navbar-expand-lg navbar-red navbar-dark">
    <div className="wrapper"> </div>
    <div className="container-fluid all-show"> <a to="/" className="navbar-brand"><img src={logo} style={{height:"50px",width:"120px"}} alt="logo"/> </a> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              
                <li className='nav-item active'><a to='/' className='nav-link'>Home</a></li>
                <li className="nav-item"> <a className="nav-link" href="#services">About</a> </li>
                {/* <li className="nav-item"> <a to="/register" className="nav-link" >REGISTER</a> </li> */}
                <li className="nav-item"> <a  className="nav-link" href="#contact">contact</a> </li>
               
               
            </ul>
           
            </div>
    </div>
</nav>  

  )
}

export default Navbar