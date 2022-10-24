import { React, useContext, useEffect, useState } from "react";
import "./navBar.css";
import { context } from "../../App";
import { useNavigate } from "react-router-dom";


const NavBar = () => {
  const userContext = useContext(context)
  const [userName, setuserName] = useState("")
  const { name, setName } = userContext
  const navigate = useNavigate()
  const hadlelogout = () => {

    localStorage.removeItem("name")
    setuserName("")
    navigate("/")
    setName("")
  }

  useEffect(() => {
    const localName = localStorage.getItem("name")
    if (localName) {
      setuserName(localName)
    }
  }, [userName])

  return (
    <nav className="nav_bar">
      <div className="logo_container">
        <img src="/naya.png" alt="logo" className="logo" />
      </div>
      <div className="tabs">
        <p className="name">{name || userName}</p>
        {(name || userName) && <p className="logout" onClick={hadlelogout}>Logout</p>}
      </div>

    </nav>
  )

}

export default NavBar;