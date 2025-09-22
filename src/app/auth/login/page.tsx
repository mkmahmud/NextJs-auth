"use client"
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function LoginPage() {
    const { data: session } = useSession();
    if (session?.user) {
        redirect("/");
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen  ">
            {
                !session?.user &&
                <div>
                    <h2 className="text-2xl font-bold text-center my-10">Login</h2>
                    <button className="flex items-center space-x-4   bg-blue-500 text-white p-2 rounded cursor-pointer" onClick={() => signIn("github")}>  <FaGithub size={20} className="" /> <span>Sign In with Github</span></button>
                    <button className="mt-4 flex items-center space-x-4   bg-green-500 text-white p-2 rounded cursor-pointer" onClick={() => signIn("google")}>  <FaGoogle size={20} className="" /> <span>Sign In with Google</span></button>

                </div>
            }


        </div>
    );
}
