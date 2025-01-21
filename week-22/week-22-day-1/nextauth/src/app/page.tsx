"use client"
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function page(){
  return <SessionProvider>
    <Home/>
  </SessionProvider>
}

function Home() {
  const session = useSession()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      hello
      {session.status=="authenticated" ? <button onClick={()=>signOut()}>Sign out</button> :<button onClick={()=>signIn()}>Sign In</button>}
    </div>
  );
}
