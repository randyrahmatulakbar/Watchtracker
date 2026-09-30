'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { tambahWatch } from "@/app/admin/action";

const AWAL = {
  judul: "",
  jenis: "film",
  gambar: "",
  rating: "",
  genre: "action",
};

const inputClass =
  "min-h-11 w-full rounded-lg border border-white/20 bg-slate-50/95 px-3 py-2.5 text-[15px] text-gray-900 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20";

export default function FormTambahWatch() {
  const router = useRouter();
  const [formData, setFormData] = useState(AWAL);
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const data = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      await tambahWatch(data);

      alert("Data berhasil disimpan!");

      setFormData(AWAL);
      router.refresh();
    } catch {
      alert("Gagal menyimpan data.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label
          className="text-sm font-semibold text-slate-200"
          htmlFor="judul"
        >
          Judul
        </label>

        <input
          className={inputClass}
          id="judul"
          name="judul"
          type="text"
          placeholder="Contoh: Breaking Bad"
          value={formData.judul}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label
          className="text-sm font-semibold text-slate-200"
          htmlFor="gambar"
        >
          URL Gambar
        </label>

        <input
          className={inputClass}
          id="gambar"
          name="gambar"
          type="url"
          placeholder="https://..."
          value={formData.gambar}
          onChange={handleChange}
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
          value={formData.jenis}
          onChange={handleChange}
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
          value={formData.genre}
          onChange={handleChange}
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

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label
          className="text-sm font-semibold text-slate-200"
          htmlFor="rating"
        >
          Rating (0-10)
        </label>

        <input
          className={inputClass}
          id="rating"
          name="rating"
          type="number"
          step="0.1"
          min="0"
          max="10"
          placeholder="Contoh: 8.5"
          value={formData.rating}
          onChange={handleChange}
          required
        />
      </div>

      <button
        className="mt-1 rounded-lg border border-white/20 bg-blue-500 px-5 py-3 text-white transition hover:bg-blue-600 disabled:cursor-wait disabled:opacity-65 disabled:hover:transform-none sm:col-span-2"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Menyimpan..." : "Tambah"}
      </button>
    </form>
  );
}