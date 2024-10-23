import { RecoilRoot } from "recoil";
import "./App.css";
import Count from "./components/Count";
import Decreament from "./components/Decreament";
import Increament from "./components/Increament";

function App() {
  return (
    <RecoilRoot>
      <Decreament />
      <Count />
      <Increament />
    </RecoilRoot>
  );
}

export default App;
