import React, { useState, useRef,useEffect } from 'react'
import './App.css'

var flag = false;
var flag2 = false;
var flag3 = false;
const App = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  useEffect(() => {
    ref4.current.disabled = true;
    ref4.current.style.backgroundColor = "transparent";
    ref4.current.style.color = "#bababa";
  }, []);
  const submitHandler = () => {
    if(ref1.current.value.length>0&&ref2.current.value.length>0&&ref3.current.value.length>0){
      ref4.current.disabled = false;
      ref4.current.style.backgroundColor = "blue";
      ref4.current.style.color = "black";
    }else{
      ref4.current.disabled = true;
    ref4.current.style.backgroundColor = "transparent";
    ref4.current.style.color = "#bababa";
    }
  }
  const changeHandler = () => {
    if (flag) {
      ref1.current.value.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/) ?
      setemail("") : setemail("Invalid Email")
    }
    submitHandler();
  }
  const changeHandler2 = () => {
    if (flag2) {
      ref2.current.value.length > 3 ? setname("") : setname("Invalid Name")
    }
    submitHandler();
  }
  const changeHandler3 = () => {
    if (flag3) {
      ref3.current.value.length>0 ?
      setpassword("") : setpassword("Invalid password")
    }
    submitHandler();
  }
  const submitemail = () => {
    if (ref1.current.value.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)) {
      flag = false;
      setemail("Valid")
    } else {
      flag = true;
      setemail("Invalid Email")
    }
    if (ref2.current.value.match(/^\d{10}$/)) {
      flag2 = false;
      setname("Valid")
    } else {
      flag2 = true;
      setname("Invalid name")
    }
    if (ref3.current.value.length>5) {
      flag3 = false;
      setpassword("Valid")
    } else {
      flag3 = true;
      setpassword("Invalid password")
    }
    submitHandler();
  }
  
  return (
    <div>
      <input
        id='inp1'
        type="text"
        name='email'
        onChange={changeHandler}
        ref={ref1}
        autoComplete='off'
        placeholder='Email'
        style={email === "Invalid Email" ? { borderBottom: "0.2vw solid red",color:"red" } : { borderBottom: "0.2vw solid blue",color:"black" }}
      /><br />
      <small
        style={email === "Invalid Email" ? { color: "red" } : { color: "blue" }}
      >{email}</small><br />
      <input
        id='inp2'
        type="text"
        name='name'
        onChange={changeHandler2}
        ref={ref2}
        autoComplete='off'
        placeholder='Mobile name'
        style={name === "Invalid name" ? { borderBottom: "0.2vw solid red",color:"red" } : { borderBottom: "0.2vw solid blue",color:"black" }}
      /><br />
      <small
        style={name === "Invalid name" ? { color: "red" } : { color: "blue" }}
      >{name}</small><br />
      <input
        id='inp3'
        type="text"
        name='password'
        onChange={changeHandler3}
        ref={ref3}
        autoComplete='off'
        placeholder='password'
        style={password === "Invalid password" ? { borderBottom: "0.2vw solid red",color:"red" } : { borderBottom: "0.2vw solid blue",color:"black" }}
      /><br />
      <small
        style={password === "Invalid password" ? { color: "red" } : { color: "blue" }}
      >{password}</small><br />
      <button onClick={submitemail}
      ref={ref4}
        style={name === "Invalid name" && { boxShadow: "2px 2px 10px red",background: "linear-gradient(to bottom,tomato,#FFCDC4,tomato)" } ||
          email === "Invalid Email" && { boxShadow: "2px 2px 10px red" ,background: "linear-gradient(to bottom,tomato,#FFCDC4,tomato)"} ||
          { boxShadow: "2px 2px 10px darkblue",color: "black",backgroundColor:"blue" }}
      >Submit</button>
    </div>
  )
}
export default App;