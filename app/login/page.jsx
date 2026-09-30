import { login } from "./action";

export default function Login() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-5">
      <div className="w-full max-w-95 rounded-2xl border border-white/15 bg-white/8 p-8 text-center shadow-[0_8px_30px_rgba(0,0,0,.3)] backdrop-blur-xl">
        <h1 className="mb-2 text-3xl font-bold">Login</h1>
        <p className="mb-6 text-gray-300">Klik tombol di bawah untuk masuk ke halaman admin</p>

        <form action={login}>
          <button
            className="mt-5 w-full rounded-xl border-0 bg-blue-500 px-4 py-3.5 text-base text-white transition hover:-translate-y-0.5 hover:bg-blue-600"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
