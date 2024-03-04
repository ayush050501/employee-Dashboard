import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import customercare from './customercare.png';
import moptrologo from './moptrologo.png';
import './employee.css'
import EmpCard from './EmpCard';

function Employee() {
  const [searchTerm, setSearchTerm] = useState('');
  const [emp,setEmp] = useState([{
    "EMPID":"1",
    "Name":"Arjun",
    "DOB":"16-11-2000",
    "Role":"Software Engineer"
  },
  {
    "EMPID":"2",
    "Name":"Mahesh",
    "DOB":"15-01-2000",
    "Role":"Web developer"
  }]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <div className="home">
        <div className="CC">
          <img src={customercare} alt='customercare'/>
        </div>
        <div className="logo">
          <img src={moptrologo} alt='moptrologo' width="71"/>
        </div>
          <div className='find'>
          <input className='search' type="text" placeholder="Search with name" value={searchTerm} onChange={handleInputChange}/>
          <button className="search1" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className="EMPcard my-3">
          {emp.map((element)=>{
            return(
              <div key={element.EMPID}>
                <EmpCard EMPID= {element.EMPID} Name={element.Name} DOB={element.DOB} Role={element.Role}/>
              </div>
            )
          })}
        </div>
        <span className='bar'>
          <Navbar/>
        </span>
      </div>
    </>
  )
}

export default Employee
