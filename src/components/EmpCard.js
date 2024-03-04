import React from 'react';
import './Empcard.css';


function EmpCard(props) {
    let {EMPID,Name,DOB,Role} = props;
  return (
    <div className='main'>
    <div className="card my-2">
      <div style={{paddingBottom:"5%"}}>
      <span style={{whiteSpace:'pre-wrap',opacity:"0.6"}}>EMP ID{"  "}:{"  "}</span><span>{EMPID}</span>
      </div>
      <div style={{paddingBottom:"5%"}}>
        <span style={{whiteSpace:'pre-wrap',opacity:"0.6"}}>Name{"    "}:{"  "}</span><span>{Name}</span>
      </div>
      <div style={{paddingBottom:"5%"}}>
        <span style={{whiteSpace:'pre-wrap',opacity:"0.6"}}>DOB{"      "}:{"  "}</span><span style={{color:"red"}}>{DOB}</span>
      </div>
      <div style={{paddingBottom:"5%"}}>
      <span style={{whiteSpace:'pre-wrap',opacity:"0.6"}}>Role{"       "}:{"  "}</span><span style={{color:'yellowgreen'}}>{Role}</span>
      </div>
    </div>
    </div>
  )
}

export default EmpCard
