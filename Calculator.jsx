import React, { useState, useRef } from 'react'
import style from "./calculator.module.css"

export const Calculator = () => {
let n1=useRef();
let n2=useRef();

let[result,setState]=useState(0);
let add=()=>{setState(parseInt(n1.current.value)+parseInt(n2.current.value))}
let sub=()=>{setState(parseInt(n1.current.value)-parseInt(n2.current.value))}
let multi=()=>{setState(parseInt(n1.current.value)*parseInt(n2.current.value))}
let divi=()=>{setState((parseInt(n1.current.value)/parseInt(n2.current.value)).toFixed(5))}

  return (
    <div id={style.main}>
      <div class={style.sec}>
        <h1>Calculator</h1>
        <label htmlFor="">Input 1</label><br />
        <input type="number" ref={n1} placeholder='Enter number'/><br />
        <label htmlFor="">Input 2</label><br />
        <input type="number" ref={n2} placeholder='Enter number'/><br /><br></br>
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
        <button onClick={multi}>*</button>
        <button onClick={divi}>/</button>
        <h2>result={result}</h2>
      </div>
    </div>
  )
}
export default Calculator;
