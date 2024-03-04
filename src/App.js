import "./App.css";
import React, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Employee from "./components/Employee";
import Alert from "./components/Alert";
function App() {
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  return (
    <>
      <Router>
        <Alert alert={alert}/>
        <Routes>
          <Route exact strict path="/" element={<Login showAlert={showAlert}/>}/>
          <Route exact strict path="/Home" element={<Dashboard/>}/>
          <Route exact strict path="/Employee" element={<Employee/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
