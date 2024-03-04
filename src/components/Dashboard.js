import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import customercare from './customercare.png';
import moptrologo from './moptrologo.png';
import './dashboard.css';
import ProductivityBar from './ProductivityBar';

function Dashboard() {
  const [label,setLabel] = useState("Monday");
  const [value,setValue] = useState(0);

  useEffect(()=>{
    setInterval(() => {
      setValue((val)=>val+1);     
    }, 100);
  },[])
  return (
    <>
      <div className="home">
        <div className="CC">
          <img src={customercare} alt='customercare'/>
        </div>
        <div className="logo">
          <img src={moptrologo} alt='moptrologo' width="71"/>
        </div>
        <div className="productivity">
          <div className="board">
          <div className='EPD'>Employee Productivity Dashboard</div>
          </div>
          <ProductivityBar value={4} label={"Monday"}/>
          <ProductivityBar value={92} label={"Tonday"}/>
          <ProductivityBar value={122} label={"Wednesday"}/>
          <ProductivityBar value={93} label={"Thrusday"}/>
          <ProductivityBar value={89} label={"Friday"}/>
          <ProductivityBar value={98} label={"Saturday"}/>
        </div>
        <span className='bar'>

          <Navbar/>
        </span>

        
      </div>
    </>
  )
}

export default Dashboard
