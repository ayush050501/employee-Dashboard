import React from 'react'
import './navbar.css';
import home from './home.jpeg';
import user from './user.png'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigation=useNavigate()
  const handleNav=(e)=>{
    e.preventDefault();
    navigation('/Home')
  }
  const handleEmp=(e)=>{
    e.preventDefault();
    navigation('/Employee')
  }
  return (
  <>
    <div className='efgh'>
      <div onClick={handleNav}>
        <img className="navigation" src={home} alt="home" width="28" height="28"/>
      </div>
      <div onClick={handleEmp}>
        <img className="navigation" src={user} alt="user" width="28" height="28" />
      </div>
    </div>
      
    </>
  )
}

export default Navbar
