'use client';

import Link from "next/link";
import { useState } from "react";
import { useFormStatus } from "react-dom";

const inputClass =
  "w-full rounded-lg border border-white/20 bg-slate-50/95 px-3.5 py-3 text-[15px] text-gray-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="inline-flex min-h-11 items-center justify-center rounded-lg border border-blue-300/35 bg-blue-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-600 disabled:cursor-wait disabled:opacity-65"
      type="submit"
      disabled={pending}
    >
      {pending ? "Menyimpan..." : "Simpan Perubahan"}
    </button>
  );
}

export default function EditForm({
  id,
  judulAwal,
  jenisAwal,
  gambarAwal,
  ratingAwal,
  genreAwal,
  editWatch
}) {
  const [judul, setJudul] = useState(judulAwal);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    if (judul.trim().length < 1) {
      event.preventDefault();
      setError("Judul tidak boleh kosong.");
    }
  }

  return (
    <form
      className="flex flex-col gap-5"
      action={editWatch}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="id" value={id} />

      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-semibold text-slate-200"
          htmlFor="judul"
        >
          Judul
        </label>

        <input
          className={inputClass}
          id="judul"
          type="text"
          name="judul"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          maxLength={150}
          required
        />

        <div className="flex min-h-4.5 justify-between text-xs text-slate-400">
          <span className={error ? "text-red-300" : ""}>{error}</span>
          <span>{judul.length}/150</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-semibold text-slate-200"
          htmlFor="gambar"
        >
          URL Gambar
        </label>

        <input
          className={inputClass}
          id="gambar"
          type="url"
          name="gambar"
          defaultValue={gambarAwal}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-semibold text-slate-200"
          htmlFor="jenis"
        >
          Jenis
        </label>

        <select
          className={inputClass}
          id="jenis"
          name="jenis"
          defaultValue={jenisAwal}
          required
        >
          <option value="film">Film</option>
          <option value="series">Series</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-semibold text-slate-200"
          htmlFor="genre"
        >
          Genre
        </label>

        <select
          className={inputClass}
          id="genre"
          name="genre"
          defaultValue={genreAwal}
          required
        >
          <option value="action">Action</option>
          <option value="romance">Romance</option>
          <option value="comedy">Comedy</option>
          <option value="sports">Sports</option>
          <option value="fantasy">Fantasy</option>
          <option value="slice_of_life">Slice of Life</option>
          <option value="sad">Sad</option>
          <option value="music">Music</option>
          <option value="mystery">Mystery</option>
          <option value="horror">Horror</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-semibold text-slate-200"
          htmlFor="rating"
        >
          Rating (0-10)
        </label>

        <input
          className={inputClass}
          id="rating"
          type="number"
          name="rating"
          step="0.1"
          min="0"
          max="10"
          defaultValue={ratingAwal}
          required
        />
      </div>

      <div className="mt-2 flex justify-end gap-3 max-[560px]:flex-col-reverse">
        <Link
          className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/20 bg-white/8 px-5 py-2.5 text-sm font-bold text-slate-200 transition hover:bg-white/16 max-[560px]:w-full"
          href="/admin/index"
        >
          Kembali
        </Link>

        <SubmitButton />
      </div>
    </form>
  );
}