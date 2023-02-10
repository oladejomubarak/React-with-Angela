import React from "react";


var isLoggedIn= true;

function loginCondition(){
  if (!isLoggedIn){
    return(
      <h1>Hello</h1>
    );
  }
  else{
    return(
      <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
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
