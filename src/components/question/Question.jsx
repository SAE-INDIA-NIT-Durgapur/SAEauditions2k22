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
    <div className="bg"></div>
<div className="bg bg2"></div>
<div className="bg bg3"></div>
    <div className="ques-top">
      
    <h1 className="ques-h">WELCOME TO SAE-NITD AUDITIONS</h1>
    <div className="ques-dash"></div>
    <p className="ques-p">Good Luck Attempting the Questions! See you in the Next Round!</p>
    </div>

<form className='mx-4 justify-content-around form-cont-bg' style={{color:"#81AFDD"}}>
  {
    country.map((item) => {
      
      return (
      <div className="form-group">
        {(item.image===null && item.ques_type==="")?<>
        <label htmlFor="exampleInputEmail1">{item.ques_round} . {item.question_text}</label>
        <textarea type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your answer"/>
        </>
        :(item.question_type==="M" && item.image!==null && item.ques_round===17)?<><label htmlFor="exampleInputEmail1">{item.ques_round} . {item.question_text}</label>
        <br /><img src={item.image} className="ques-img" alt='ques-img'/><br/>
        <select name="option" id="option" className="ques_options">
        <option value="" selected disabled hidden>Choose your answer</option>
          <option value="A">A=1</option>
          <option value="B">B=2</option>
          <option value="C">C=3</option>
          <option value="D">D=4</option>
          <option value="E">E=5</option>
        </select></>
        :(item.question_type==="M" && item.image!==null && item.ques_round===15)?<><label htmlFor="exampleInputEmail1">{item.ques_round} . {item.question_text}</label>
        <br /><img src={item.image} className="ques-img" alt='ques-img' /><br/>
        <select name="option" id="option" className="ques_options">
        <option value="" selected disabled hidden>Choose your answer</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          
        </select></>
         :(item.image===null && item.ques_round===16 && item.ques_round===16)?<><label htmlFor="exampleInputEmail1">{item.ques_round} . {item.question_text}</label>
         <br/>
         <select name="option" id="option" className="ques_options">
         <option value="" selected disabled hidden>Choose your answer</option>
           <option value="A">A</option>
           <option value="B">B</option>
           <option value="C">C</option>
           <option value="D">D</option>
           
         </select></>
         :(item.question_type==="T" && item.image!==null)?<>
         <label htmlFor="exampleInputEmail1">{item.ques_round} . {item.question_text}</label><br />
         <img src={item.image} className="ques-img" alt='ques-img' />
        <textarea type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your answer"/></>


        :<>
        <label htmlFor="exampleInputEmail1">{item.ques_round} . {item.question_text}</label><br />
        <textarea type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your answer"/>
        </>}
      
      
      
    </div>
      )
    
    })
  }
  <div className="container btn-submit-questions">
  <button type="submit" className="mt-3 mb-5 custom-btn btn button btn-13  bold">Submit</button>
  </div>
</form>

    </>
  )
}

export default Question
