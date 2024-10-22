import "./App.css";
import Counter from "./components/Counter";
import DebounceValue from "./components/DebounceValue";
import InputForDebounce from "./components/InputForDebounce";
import { Posts } from "./components/Posts";
import PreviousState from "./components/PreviousState";

function App() {
  return (
    <div>
      {/* <Counter />
      <Posts /> */}
      {/* <PreviousState /> */}
      {/* <InputForDebounce /> */}
      <DebounceValue />
    </div>
  );
}

export default App;
