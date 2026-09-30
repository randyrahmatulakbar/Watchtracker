'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { hapusWatch } from "@/app/admin/action";

export default function TombolHapus({ id }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleDelete() {
    if (!window.confirm("Yakin ingin menghapus data ini?")) return;

    setIsLoading(true);

    try {
      await hapusWatch(id);
      alert("Data berhasil dihapus!");
      router.refresh();
    } catch {
      alert("Gagal menghapus data.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <button
      className="inline-flex min-w-18 items-center justify-center rounded-lg border border-red-300/40 bg-red-600/75 px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-red-600 disabled:cursor-wait disabled:opacity-65"
      type="button"
      onClick={handleDelete}
      disabled={isLoading}
    >
      {isLoading ? "Menghapus..." : "Hapus"}
    </button>
  );
}
