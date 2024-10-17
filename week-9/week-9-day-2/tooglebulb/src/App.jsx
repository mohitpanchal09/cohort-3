import { useContext, useState, createContext } from "react";
import "./App.css";

const BulbContext = createContext(); //1. creating the context

export function BulbProvider({ children }) {
  const [bulbState, setBulbState] = useState(true);
  return (
    <BulbContext.Provider
      value={{
        bulbState: bulbState,
        setBulbState: setBulbState,
      }}
    >
      {children}
    </BulbContext.Provider>
  );
}

function App() {
  return <Lightbulb />;
}

export default App;

function Lightbulb() {
  // const [bulbState, setBulbState] = useState(true);
  return (
    //2. providing the context
    // <BulbContext.Provider value={{bulbState:bulbState,setBulbState:setBulbState}}>
    //   <BulbState />
    //   <ToggleBulbState />
    // </BulbContext.Provider>

    <BulbProvider>
      <BulbState />
      <ToggleBulbState />
    </BulbProvider>
  );
}

function BulbState() {
  const { bulbState } = useContext(BulbContext);

  return <div>{bulbState ? "bulb on" : "bulb off"}</div>;
}

function ToggleBulbState() {
  const { setBulbState } = useContext(BulbContext); //consuming the contexts
  return (
    <div>
      <button onClick={(e) => setBulbState((prev) => !prev)}>
        toggle the button
      </button>
    </div>
  );
}
