
function App() {


  return (
    <div style={{display:'flex'}}>
      <Card >
      <input type="text"/>
      </Card>
      <Card children={"hi"}/>
    </div>
  )
}

function Card({children}){
  return <div>
    {children}
  </div>
}

export default App
