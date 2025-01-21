import { getServerSession } from "next-auth"

type Props = {}

async function page({}: Props) {
    const session = await getServerSession()
    console.log('session',session)
  return (
    <div>page</div>
  )
}

export default page