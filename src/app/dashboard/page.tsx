"use client"
import { signOut, useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2>Dashboard Page</h2>
      {
        session?.user?.email && (
          <div>
            <button onClick={() => signOut({ callbackUrl: "/api/auth/signin" })}>
              Sign Out
            </button>
          </div>
        )
      }
    </div>
  );
}