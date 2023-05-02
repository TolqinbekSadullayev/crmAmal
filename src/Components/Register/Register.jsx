import React , {useState} from 'react'
import {useNavigate } from "react-router-dom";
import './Register.css'

export default function Register() {
  const [val1 , setval1] = useState()
  const [val2 , setval2] = useState()

  let navigate = useNavigate()
  const run = ()=>{
    if(val1 === 'salom' && val2 === "12345"){
        navigate('/home')
    }
    else{
      alert('kalla ukam')
    }
  }
  return (
    <div className='align'>
       <div class="grid">
    <form  method="POST" class="form login">
      <div class="form_field">
        <label><i class="fa fa-user" style={{color: '#606468'}}></i></label>
        <input onInput={(val)=>{setval1(val.target.value)}} type="text" name="username" class="form_input" placeholder="Username" required/>
      </div>
      <div class="form_field">
        <label><i class="fa fa-lock" style={{color: '#606468'}}></i></label>
        <input onInput={(val)=>{setval2(val.target.value)}} type="password" name="password" class="form_input" placeholder="Password" required/>
      </div>
      <div class="form_field">
        <button class="submitButton" onClick={run} type="submit">Submit</button>
      </div>
    </form>
    <p class="text--center">Not a member? <a href="https://t.me/@tolqin_sadullayev/">Register</a></p>
  </div>
    </div>
  )
}

