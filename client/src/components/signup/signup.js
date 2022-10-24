import React, { useState } from "react";
import "./signup.css"
import "../login/login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [password, setpassword] = useState("")
  const [confPassword, setconfPassword] = useState("")

  const handleChange = (e) => {
    if (e.target.id === "fName") {
      setfirstName(e.target.value)
    }
    if (e.target.id === "lName") {
      setlastName(e.target.value)
    }
    if (e.target.id === "email") {
      setEmail(e.target.value)
    }
    if (e.target.id === "password") {
      setpassword(e.target.value)
    }
    if (e.target.id === "confPassword") {
      setconfPassword(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = {
      firstName,
      lastName,
      email,
      password
    }

    console.log(body)

    if (firstName !== "" && lastName !== "" && email !== "" && password !== "" && confPassword !== "") {
      if (password === confPassword) {
        axios.post("http://localhost:3008/signup/", body)
          .then((res) => {
            console.log(res)
            if (res) {
              navigate("/login")
            }
          }).catch((err) => {
            console.log(err)
          })

      } else {
        alert("Password Doesn't Match")
      }

    } else {
      alert("Fill The Details Required!")
      console.log("Fields required")
    }

  }
  const openlogin = () => {
    navigate("/login")
  }




  return (
    <div className="signUpContainer">
      <div className="mainDiv">
        <div className="innerDiv">
          <h1 className="heading">Sign In</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input id="fName" className="inputTag" placeholder="First Name" type="text" value={firstName} onChange={handleChange} />
            <input id="lName" className="inputTag" placeholder="Last Name" type="text" onChange={handleChange} value={lastName} />
            <input id="email" className="inputTag" placeholder="Email" type="email" onChange={handleChange} value={email} />
            <input id="password" className="inputTag" placeholder="Password" type="password" onChange={handleChange} value={password} />
            <input id="confPassword" className="inputTag" placeholder="Confirm Password" type="password" onChange={handleChange} value={confPassword} />
            <button className="button">Sign In</button>
            <p className="singnUp">Have an account? <span className="span" onClick={openlogin}>Log In</span></p>
          </form>
        </div>

      </div>
    </div>

  )
}

export default SignUp