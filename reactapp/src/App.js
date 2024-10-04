import React from "react";
import Greeting from "./Greeting";
import GreetingWithProp from "./GreetingWithInput";
import ReturnImage from "./Image";

function App()
{
  return (
    <div className="App">
    <h1>Hello Saif</h1>
    <Greeting/>
    <GreetingWithProp name= "Prop Bhaiya"/>
    <ReturnImage></ReturnImage>
    </div>
  );
}

export default App;