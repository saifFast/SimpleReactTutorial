import React from "react";
import Greeting from "./Greeting";
import GreetingWithProp from "./GreetingWithInput";

function App()
{
  return (<div className="App">
    <h1>Hello Saif</h1>
    <Greeting/>
    <GreetingWithProp name= "Prop Bhaiya"/>
    </div>
  );
}

export default App;