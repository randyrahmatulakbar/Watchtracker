import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { editWatch } from "../../action";
import EditForm from "./EditForm";

export default async function EditWatchPage({ params }) {
  const { id } = await params;

  const watch = await prisma.watch.findUnique({
    where: { id: Number(id) }
  });

  if (!watch) notFound();

  return (
    <div className="mx-auto my-10 flex w-[90%] max-w-275 justify-center px-0 py-5">
      <div className="w-full max-w-140 rounded-2xl border border-white/16 bg-white/8 p-8 shadow-[0_14px_40px_rgba(0,0,0,.28)] backdrop-blur-xl max-[560px]:px-5">

        <div className="mb-7">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.08em] text-blue-300">
            Data #{watch.id}
          </p>

          <h1 className="mb-2 text-3xl font-bold">
            Edit Tontonan
          </h1>

          <p className="text-slate-300">
            Perbarui informasi film atau series di bawah ini.
          </p>
        </div>

        <EditForm
          id={watch.id}
          judulAwal={watch.judul}
          jenisAwal={watch.jenis}
          gambarAwal={watch.gambar}
          ratingAwal={watch.rating}
          genreAwal={watch.genre}
          editWatch={editWatch}
        />

      </div>
    </div>
  );
}