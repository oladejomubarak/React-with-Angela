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
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function handleInfo(event){
    const {name, value} = event.target;

    setContact(previousValue => {
      return{
        ...previousValue,
        [name]: value
      }
    });
    // const newValue = event.target.value;
    // const newInput = event.target.name
    // setContact(previousValue => {
    //   if (newInput === "fName"){
    //     return{
    //     fName: newValue,
    //     lName: previousValue.lName,
    //     email: previousValue.email
    //   };
    //   } else if(newInput === "lName"){
    //     return{
    //       fName: previousValue.fName,
    //       lName: newValue,
    //       email: previousValue.email
    //     }
    //   } else{
    //     return{
    //     fName: previousValue.fName,
    //     lName: previousValue.lName,
    //     email: newValue
    //     }
    //   }
    // });

  }
  
  // function handleFullName(event){
   
  // }
  // function handleLname(event){
  //   const newLname = event.target.value;
  //      setLname(newLname);
  //  }
  return (
 <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleInfo}  name="fName"
         placeholder="First Name" value={contact.fName} />
        <input onChange={handleInfo}  name="lName"
         placeholder="Last Name" value={contact.lName}/>
        <input onChange= {handleInfo} name="email" 
        placeholder="Email" value= {contact.email} />
        <button>Submit</button>
      </form>
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
{/* <h1>Hello {fullName.fName}{fullName.lName}</h1>
      <form>
        <input onChange={handleFullName} name="fName"
         placeholder="First Name" value={fullName.fName} />
        <input onChange={handleFullName} name="lName" 
        placeholder="Last Name" value={fullName.lName} />
        <button>Submit</button>
      </form> */}

    </div>
  );
}
export default App;
