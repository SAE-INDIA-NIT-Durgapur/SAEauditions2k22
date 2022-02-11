import React from 'react'
import "../../CSS/questions.css"
import axios from "axios"
import {useState,useEffect} from "react"
const Question = () => {
    const [country, setcountry] = useState([]);
    useEffect(() => {
        axios.get(`https://auditionsapi.saenitd.com/api`)
            .then(res => {
                const persons = res.data;
                setcountry(persons);
            })
    }, []);
    console.log(country);
  return (
    <>

<form className='mx-4 justify-content-around' style={{color:"#81AFDD"}}>
  {
    country.map((item) => {
      // console.log(item);
      return (
      <div className="form-group">
        
      <label for="exampleInputEmail1">{item.ques_round} {item.text}</label>
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

