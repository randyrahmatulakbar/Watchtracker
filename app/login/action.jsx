"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Placeholder: belum ada pengecekan user, klik login langsung masuk.
export async function login() {
  const cookieStore = await cookies();
  cookieStore.set("isLogin", "true");
  redirect("/admin");
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("isLogin");
  redirect("/login");
}
