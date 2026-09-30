'use server';

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function ambilData(formData) {
  const rating = Number(formData.get("rating"));

  return {
    judul: String(formData.get("judul")).trim(),

    jenis:
      formData.get("jenis") === "series"
        ? "series"
        : "film",

    gambar: String(formData.get("gambar")).trim(),

    rating: Math.min(
      10,
      Math.max(
        0,
        Number.isNaN(rating) ? 0 : rating
      )
    ),

    genre: String(formData.get("genre")),
  };
}

function segarkan() {
  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/admin/index");
}

export async function tambahWatch(formData) {
  await prisma.watch.create({
    data: ambilData(formData),
  });

  segarkan();
}

export async function editWatch(formData) {
  const id = Number(formData.get("id"));

  await prisma.watch.update({
    where: { id },
    data: ambilData(formData),
  });

  segarkan();

  redirect("/admin/index");
}

export async function hapusWatch(id) {
  await prisma.watch.delete({
    where: { id: Number(id) },
  });

  segarkan();
}