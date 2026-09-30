import { prisma } from "@/lib/prisma";

export default async function Admin() {
  const total = await prisma.watch.count();

  const jumlahFilm = await prisma.watch.count({
    where: { jenis: "film" },
  });

  const jumlahSeries = await prisma.watch.count({
    where: { jenis: "series" },
  });

  const rata = await prisma.watch.aggregate({
    _avg: { rating: true },
  });

  const rataRating =
    rata._avg.rating === null
      ? "-"
      : rata._avg.rating.toFixed(1);

  const cards = [
    ["Total Tontonan", total],
    ["Film", jumlahFilm],
    ["Series", jumlahSeries],
    ["Rata-rata Rating", rataRating],
  ];

  return (
    <div className="mx-auto my-10 w-[90%] max-w-275">
      <h1 className="mb-8 text-center text-3xl font-bold sm:text-4xl">
        👨‍💼 Admin Dashboard
      </h1>

      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
        {cards.map(([label, value]) => (
          <div
            className="rounded-2xl border border-white/15 bg-white/8 p-6 text-center backdrop-blur-xl transition hover:-translate-y-1"
            key={label}
          >
            <h2 className="mb-4 text-lg font-semibold text-blue-300">
              {label}
            </h2>

            <p className="text-4xl font-bold">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}