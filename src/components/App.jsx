import React from "react";


var isLoggedIn= true;

function loginCondition(){
  if (!isLoggedIn){
    return(
      <h1>Hello</h1>
    );
  }
}

function App() {
  return (
    <div className="container">
      
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
