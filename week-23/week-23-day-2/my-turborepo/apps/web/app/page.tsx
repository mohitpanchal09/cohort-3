"use client"
import {TextInput} from '@repo/ui/text-input'
import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { useRouter } from 'next/navigation';

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.page} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div style={{display:'flex',gap:'20px'}}>
        <TextInput type="text" placeholder="Enter the room ID" onChange={()=>alert('hi')}/>
        <button style={{border:'none',padding:'20px',borderRadius:'10px',cursor:'pointer'}} onClick={()=>router.push('/chat/123')}>Join Room</button>
      </div>
    </div>
  );
}
