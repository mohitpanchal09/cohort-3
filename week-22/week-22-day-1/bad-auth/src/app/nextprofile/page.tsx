import axios from "axios"

type Props = {}

async function page({}: Props) {
    const res = await axios.get('http://localhost:3000/api/profile',{
        headers:{
            authorization:localStorage.getItem('token')
        }
    })
    const profile = "res.data.profile"
    console.log("🚀 ~ page ~ profile:", profile)
  return (
    <div>{profile}</div>
  )
}

export default page