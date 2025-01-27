import { useParams } from "next/navigation";


export default function Page() {
  const params = useParams<{ roomId: string }>();
  return (
    <div style={{height:'100vh',width:'100vw', display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <div style={{height:'50%',width:'50%',backgroundColor:'gray'}}>
        {params.roomId}
        </div>
        <div style={{height:'10%',width:'50%'}}>

        </div>
    </div>
  )
}

