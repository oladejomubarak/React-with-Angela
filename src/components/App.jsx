import React from "react";
import Login from "./Login";


var isLoggedIn= false;

function loginCondition(){
  if (isLoggedIn){
    return(
      <h1>Hello</h1>
    );
  }
  else{
    return(
      <Login />
    );
  }
}

function App() {
  return (
    <div className="container">
      {loginCondition()}
    </div>
  );
}

export default App;
