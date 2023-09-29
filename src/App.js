import React, {useState} from "react";
import {BrowserRouter as Router,Route,Link,Routes,BrowserRouter} from 'react-router-dom' ;
import Navbar from "./Navbar"
import Content from "./Content" ;
import Campus from "./Campus";
import Courses from "./Courses";
import Contact from "./Contact";
import TnP from "./TnP";
import SignUpForm from "./SignUpForm";
import Festivals from "./Festivals";
import StudentZone from "./StudentZone";
import "./App.css" ;
import Scrollbar from "./Scrollbar" ;

function App(){

  const[mode , setMode] = useState("light") ;

  const toggleMode = () =>{
    if(mode === "light")
    setMode("dark")

    else
    setMode("light")
  }

  document.body.className = mode === "light" ? "light-mode" : "dark-mode";

  return(
    <BrowserRouter>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <div className="view">
      <Scrollbar/>
      <Routes>
        <Route exact path="/" element={<Content/>}></Route>
        <Route exact path="/campus" element={<Campus/>}></Route>
        <Route exact path="/courses" element={<Courses/>}></Route>
        <Route exact path="/TnP" element={<TnP/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
        <Route exact path="/signup" element={<SignUpForm/>}></Route>
        <Route exact path="/festivals" element={<Festivals/>}></Route>
        <Route exact path="/studentzone" element={<StudentZone/>}></Route>
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App ;