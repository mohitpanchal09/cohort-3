"use client"
import { type ImageProps } from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

export default function Home() {
  const [slug,setSlug] = useState("")
  const router = useRouter()
  return (
    <div className={styles.page}>
      <input value={slug} onChange={(e)=>setSlug(e.target.value)}/>
      <button onClick={()=>{
        router.push(`/room/${slug}`)
      }}>Join Room</button>
    </div>
  );
}
