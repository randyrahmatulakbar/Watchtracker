import Link from "next/link";
import { cookies } from "next/headers";
import { logout } from "@/app/login/action";

export default async function Header() {
  const cookieStore = await cookies();
  const isLogin = cookieStore.get("isLogin")?.value === "true";

  return (
    <nav className="mx-auto my-5 flex w-[90%] max-w-275 items-center justify-between rounded-2xl border border-white/15 bg-white/8 px-6 py-4 backdrop-blur-xl">
      <div className="text-[25px] font-bold text-blue-400">WatchTracker</div>

      {isLogin ? (
        <div className="flex items-center gap-2">
          <Link className="rounded-lg px-4 py-2 text-[15px] transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-blue-400" href="/">Home</Link>
          <Link className="rounded-lg px-4 py-2 text-[15px] transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-blue-400" href="/admin">Dashboard</Link>
          <Link className="rounded-lg px-4 py-2 text-[15px] transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-blue-400" href="/admin/index">Kelola</Link>

          <form action={logout}>
            <button className="mt-0 rounded-lg border-0 bg-transparent px-4 py-2 text-[15px] text-white transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-blue-400" type="submit">
              Logout
            </button>
          </form>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Link className="rounded-lg px-4 py-2 text-[15px] transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-blue-400" href="/">Home</Link>
          <Link className="rounded-lg px-4 py-2 text-[15px] transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-blue-400" href="/login">Login</Link>
        </div>
      )}
    </nav>
  );
}
