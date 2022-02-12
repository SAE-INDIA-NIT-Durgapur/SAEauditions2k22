import React from 'react'
import "../../CSS/questions.css"
import axios from "axios"
import {useState,useEffect} from "react"
import Navbar from '../Navbar'
const Question = () => {
  
    const [country, setcountry] = useState([]);
    useEffect(() => {
        axios.get(`https://auditionsapi.saenitd.com/api/`)
            .then(res => {
                const persons = res.data;
                setcountry(persons);
            })
    }, []);
    console.log(country);
  return (
    <>
    <Navbar />
    <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
    <div className="ques-top">
      
    <h1 className="gradient__text ques-h">WELCOME TO SAE-NITD AUDITIONS</h1>
    <div className="ques-dash"></div>
    <p className="ques-p">Good Luck Attempting the Questions! See you in the Next Round!</p>
    </div>

<form className='mx-4 justify-content-around form-cont-bg' style={{color:"#81AFDD"}}>
  {
    country.map((item) => {
      // console.log(item);
      return (
      <div className="form-group">
        {item.image==null?<label for="exampleInputEmail1">{item.ques_round} . {item.text}</label>:<><label for="exampleInputEmail1">{item.ques_round} . {item.text}</label><br /><img src={item.image} className="ques-img" /></>}
      {/* <label for="exampleInputEmail1">{item.ques_round} . {item.text}</label><br />
      <img src={item.image} className="ques-img" /> */}
      <textarea type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your answer"/>
      {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
    </div>
      )
    
    })
  }
  
  <button type="submit" className="btn button mt-3">Submit</button>
</form>

    </>
  )
}

export default Question
