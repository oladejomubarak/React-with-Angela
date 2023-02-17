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
  function handleFname(event){
    const firstName = event.target.value;
    setContact(firstName);

  }
  function handleLname(event){
    const lastName = event.target.value;
    setContact(lastName);

  }
  function handleEmail(event){
    const email = event.target.value;
    setContact(email);

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
        <input onChange={handleFname} value={contact.fName} name="fName" placeholder="First Name" />
        <input onChange={handleLname} value={contact.lName} name="lName" placeholder="Last Name" />
        <input onChange= {handleEmail} value= {contact.email} name="email" placeholder="Email" />
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
