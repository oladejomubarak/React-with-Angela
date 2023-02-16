//import React from "react";
import Login from "./Login";
import React, {useState} from "react";



//var isLoggedIn= false;

function App() {
  


  // const now = new Date().toLocaleTimeString();

  // const [time, setTime] = useState(now);

  // function getTime(){
  //   const newTime = new Date().toLocaleTimeString();
  //   setTime(newTime);

  // }

  // setInterval(getTime, 1000);
  // const [count, setCount] = useState(0);

  // function increaseCountByOne(){
  //   setCount(count+ 1);
  //   if(count === 20){
  //     setCount(20)
  //   }
  // }

  // function decreaseCountByOne(){
  //   setCount(count- 1);
  //   if(count === 0){
  //     setCount(0)
  //   }
  // }
  // const [submit, setSubmit] = useState("hello")

  // function setClick(){
  //   setSubmit("submitted");

  // }
  // const[isMouseOver, setMouseOver] = useState(false)

  // function mouseOver(){
  //   setMouseOver(true);
  // }
  // function MouseOut(){
  //   setMouseOver(false)
  // }
  return (
    <div className="container">
      {/* <h1>{time}</h1> */}
      
      {/* <button onClick={getTime}>Get time</button> */}
      {/* <h1>{count}</h1>
      
      <button onClick={increaseCountByOne}>+</button>
      
      <button onClick={decreaseCountByOne}>-</button>
       */}
      {/* {isLoggedIn ? <h1>Hello</h1> : <Login />
} */}
      {/* <h1>{submit}</h1>
      <input type="text" placeholder="What is your name?" />
      <button style={{backgroundColor: isMouseOver ? "yellow" : "white"}}
      onClick={setClick}
       onMouseOver= {mouseOver} 
       onMouseOut={MouseOut}>
        
        Submit</button> */}
<h1>Hello</h1>
      <form>
        <input name="fName" placeholder="First Name" />
        <input name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>

    </div>
  );
}

export default App;
