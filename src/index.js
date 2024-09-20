import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"

 
const root =ReactDOM.createRoot(document.getElementById("root"))

function RandomNumber(){
   
  var[number,rannumgenerate]=useState(0)
  function change(){
    var rannumber=Math.floor(Math.random()*100)
    rannumgenerate(rannumber)
  }
  return(<><div id="container"><h1 id="heading">Random number Generator </h1>
    <p id="numbergeneration">Generated Number: {number}</p>
    <button onClick={change} id="button">click</button></div>
  </>)
}
root.render(<RandomNumber/>)