import "./App.css";
import Count from "./components/Count";
import Decrease from "./components/Decrease";
import Increase from "./components/Increase";
import { CountContextProvider } from "./contexts/CountContext";

function App() {
  return (
    <CountContextProvider>
      <Decrease />
      <Count />
      <Increase />
    </CountContextProvider>
  );
}

export default App;
