import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom"


function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Layout/>}>
        <Route path="products" element={<Products />}/>
        <Route path="users" element={<Users/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App


function Layout(){
  return (
    <nav>
      this is navbar
      <Outlet/>
    </nav>
  )
}

function Products(){
  return (
    <div>
      products
    </div>
  )
}
function Users(){
  return (
    <div>
      Users
    </div>
  )
}