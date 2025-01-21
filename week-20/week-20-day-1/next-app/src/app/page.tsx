import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl">Todo Application</h1>
      <div className="flex gap-x-2">
      <Link href={`/auth/signup`} className="bg-slate-900 p-3 rounded-lg">Sign Up</Link>
      <Link href={`/auth/signin`} className="bg-slate-900 p-3 rounded-lg">Sign In</Link>
      </div>
    </div>
  );
}
