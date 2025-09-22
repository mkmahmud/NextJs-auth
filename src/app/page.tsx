"use client"
import { useSession } from "next-auth/react"; 
import { signOut } from "next-auth/react"


export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>This is Home Page</h1>


      {
        session?.user ? <div> signed as {session.user.email}</div> : <div>
          
        </div>
      }

      {
        session?.user?.email && <div> <button onClick={() => signOut(session?.user?.email)}>Sign Out</button></div>
      }



    </div>
  );
}
