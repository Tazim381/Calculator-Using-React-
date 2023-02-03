import { useState } from "react";
import '../App.css';


function Calculator() {
 
 const[count,setValue] =useState();
 const[count1,setValue1] = useState();
 const[answer,result] = useState();
 function value1(event) {
  setValue(event.target.value);
 }
 function value2(event) {
  setValue1(event.target.value);
 }
 function add() {
    result(parseInt(count)+ parseInt(count1));
 }
 function substract() {
    result(parseInt(count)-parseInt(count1));
 }
 function multiply() {
    result(parseInt(count)* parseInt(count1));
 }
 function division() {
    result(parseInt(count)/ parseInt(count1));
    console.log("clicked");
 }

  return <div className="counter-wrap">
    <h1>Calculator  App</h1>
    <input onChange={value1} type="number" value={count} placeholder="Enter 1st number"></input>
    <input onChange={value2} type="number" value={count1} placeholder="Enter 2nd number"></input>
    <button onClick={add}>Add</button>
    <button onClick={substract}>Substract </button>
    <button onClick={multiply} >Multiply</button>
    <button onClick={division}>Division</button>
    <p>{`Result  = ${answer}`}</p>
  </div>;
}
 
export default Calculator;