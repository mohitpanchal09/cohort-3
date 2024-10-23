import { useState } from "react";
import "./App.css";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import Count from "./components/Count";
import { CountContextProvider } from "./contexts/countcontext";

function App() {
  return (
    <CountContextProvider>
      <Decrement />
      <Count />
      <Increment />
    </CountContextProvider>
  );
}

export default App;
