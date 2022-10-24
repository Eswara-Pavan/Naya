import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { context } from "../../App";

import "./login.css"

const LoginPage = ()=>{

  const userContext = useContext(context)

  const {setName} = userContext


  const navigate = useNavigate()

  const [email , setEmail] = useState()
  const [password , setpassword] = useState()

  const login = (e)=>{
    e.preventDefault()
    const body = {
      email : email,
      password:password
    }
    console.log(body)
    if(email !== "" && password !== ""){
      axios.post("http://localhost:3008/login/",body)
      .then((res)=>{
        console.log(res)
        if(res.data.staus === true){
          console.log(res)
          localStorage.setItem("name",res.data.name)
          setName(res.data.name)
          navigate("/sketch")
        }else{
          alert(res.data)
        }
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    }else{
      alert("Fill the details required!")
    }
  }

  const handleChange = (e)=>{
    console.log(e)
    console.log(e.target.value)
    if(e.target.id === "email"){
      setEmail(e.target.value)

    }
    if(e.target.id === "password"){
      setpassword(e.target.value)
    }
  }

  const openSignUp = ()=>{
    navigate("/signup")
  }


  return (
    <div className="loginContainer">
      <h1 className="heading">Log in to continue</h1>
      <form className="form" onSubmit={login}>
        <input id="email" className="inputTag" placeholder="Email" type="email" value={email} onChange={handleChange}/>
        <input id="password" className="inputTag" placeholder="Password" type="password" value={password} onChange={handleChange}/>
        <p className="forgot">Forgot Password?</p>
        <button type="submit" className="button">Log In</button>
        <p className="singnUp">Don't have an account? <span className="span" onClick={openSignUp}>Sign up</span></p>
      </form>
    </div>
  )
}

export default LoginPage

