import { useState } from "react";
import "./App.css"

function App() {
  let [counter, setCounter] = useState(15);
  function addValue( ){
    if (counter < 20) {
      counter+=1
         setCounter(counter)
    }
         
  
  }
  function removeValue( ){
    if (counter >= 1) {
         counter-=1
         setCounter(counter)
    }
  }
  return (
    <div className="App">
     <h1>PRACTICE SESSION-2 on basics of useState</h1>
     <h2>Counter value: {counter} </h2>
     <button onClick={addValue} >Add Values</button> 

     <br/><br/><br/>
     <button onClick={removeValue}>remove Values</button> 
       

    </div>
  );
}

export default App;
