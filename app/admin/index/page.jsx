import { prisma } from "@/lib/prisma";
import FormTambahWatch from "@/components/FormTambahWatch";
import TombolHapus from "@/components/TombolHapus";
import Link from "next/link";

export default async function Index() {
  const daftarWatch = await prisma.watch.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <div className="mx-auto my-10 w-[90%] max-w-275">
      <h1 className="mb-8 text-center text-3xl font-bold sm:text-4xl">📋 Kelola Tontonan</h1>

      <div className="mt-8 flex flex-col gap-5">
        <div className="rounded-2xl border border-white/25 bg-white/8 p-6 text-center backdrop-blur-xl transition hover:-translate-y-1">
          <h2 className="mb-4 text-lg font-semibold text-blue-300">Tambah Film / Series</h2>
          <FormTambahWatch />
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/8 p-6 text-left backdrop-blur-xl">
          <h2 className="mb-4 text-lg font-semibold text-blue-300">Daftar Tontonan</h2>

          <div className="flex flex-col gap-3">
            {daftarWatch.length === 0 && (
              <p className="text-center text-slate-300">Belum ada data.</p>
            )}

            {daftarWatch.map((w) => (
              <div
                className="flex items-center justify-between gap-5 rounded-xl border border-white/12 bg-white/5 p-3.5 sm:p-4 max-[600px]:flex-col max-[600px]:items-start"
                key={w.id}
              >
                <div className="flex items-center gap-3.5">
                  <img
                    className="h-16 w-11 rounded-md bg-slate-800 object-cover"
                    src={w.gambar}
                    alt={w.judul}
                  />
                  <div>
                    <p className="text-base font-semibold">{w.judul}</p>
                      <p className="mt-1 text-sm text-slate-300">
                        {w.jenis === "series" ? "Series" : "Film"} · {w.genre} · ⭐ {w.rating}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2.5 max-[600px]:w-full">
                  <Link
                    className="inline-flex min-w-18 flex-1 items-center justify-center rounded-lg border border-blue-300/45 bg-blue-500/18 px-3.5 py-2 text-sm font-semibold text-blue-200 transition hover:bg-blue-600 hover:text-white"
                    href={`/admin/edit/${w.id}`}
                  >
                    Edit
                  </Link>
                  <TombolHapus id={w.id} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
