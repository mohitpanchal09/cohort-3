import axios from "axios"

export default async function page() {
    const dataArray = (await axios.get('https://api.escuelajs.co/api/v1/users')).data
    await new Promise(r=>setTimeout(r,5000))
  return (
    <div>{dataArray.map((item:any)=><div>{JSON.stringify(item)}</div>)}</div>
  )
}
