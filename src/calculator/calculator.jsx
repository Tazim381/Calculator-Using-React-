import { useState } from "react";
import "../App.css";

//create component
function Operation({ label,handleOnclik }) {
  return <button onClick={handleOnclik}>{label}</button>;
}

function Calculator() {
  const operations = ["+", "-", "*", "/"];
  const [numbers,setValue] = useState([0,0]);
  const [result,setResult] = useState(0);
  function setNumber(value,index) {
    const newNumbers =[...numbers];
    newNumbers[index]= parseInt(value);
     setValue(newNumbers);
  }

  function handleOperation(operationType) {
     switch(operationType){
      case '+':
        setResult(numbers[0]+numbers[1]);
        break;
      case '-':
        setResult(numbers[0]-numbers[1]);
        break;
      case '*':
        setResult(numbers[0]*numbers[1]);
        break;
      case '/':
        setResult(numbers[0]/numbers[1]);
        break;
      default:
        break;
     }
  }

  return (
    <div className="counter-wrap">
      <h1>This is happening</h1>
      <div className="input">
        {
          [0,1].map((id) => (
            <input type="number"  onChange={(e) =>setNumber(e.target.value,id) }></input>
          ))
        }
      </div>
      <div className="operation">
        {operations.map((operation, index) => (
          <Operation key={index} label={operation} handleOnclik={()=>(handleOperation(operation))}/>
        ))}
      </div>
      <div>
        <h3>Result = {result}</h3>
      </div>

    </div>
  );
}

export default Calculator;
