import { prisma } from "@/lib/prisma";

export default async function Home() {
  const daftarWatch = await prisma.watch.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <div className="mx-auto my-10 w-[90%] max-w-275">
      <h1 className="mb-8 text-center text-3xl font-bold sm:text-4xl">🎬 WatchTracker</h1>

      {daftarWatch.length === 0 ? (
        <p className="text-center text-slate-300">Belum ada film atau series yang dicatat.</p>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6">
          {daftarWatch.map((w) => (
            <div
              className="overflow-hidden rounded-2xl border border-white/15 bg-white/8 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,.4)]"
              key={w.id}
            >
              <img
                className="block aspect-2/3 w-full bg-slate-800 object-cover"
                src={w.gambar}
                alt={w.judul}
              />
              <div className="p-4">
                <p className="mb-2.5 font-bold">{w.judul}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="rounded-full bg-blue-500/30 px-2.5 py-0.75 text-xs font-semibold text-blue-200">
                    {w.jenis === "series" ? "Series" : "Film"} · {w.genre}
                  </span>
                  <span className="font-bold text-amber-400">⭐ {w.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
