import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttons from './components/buttons'
import Counter from './components/Counter'
import IsEven from './components/IsEven'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Buttons/>
<Counter />
<IsEven/>
      </>
  )
}

export default App
