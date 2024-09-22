import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import LogoutButton from "./logout-button";
import LoginButton from "./login-button";

export async function Navbar() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <nav className="flex justify-between items-center p-4 bg-background">
      <Link href="/" className="text-2xl font-bold">
        Simon Game
      </Link>
      <div>
        <Link href="/leaderboard" className="mr-4">
          Leaderboard
        </Link>
        {session ? <LogoutButton /> : <LoginButton />}
      </div>
    </nav>
  );
}
