import Main from "./components/ Main"
import SideBar from "./components/SideBar"

function App() {

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white h-screen">
      <SideBar/>
      <button className="absolute top-5 right-5" onClick={()=>{
        document.querySelector('html').classList.toggle('dark')
      }}>toggle</button>
    </div>
  )
}

export default App
