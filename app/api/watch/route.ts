import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    const data = await prisma.watch.findMany({ orderBy: { createdAt: 'desc' } });

    return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    const baru = await prisma.watch.create({
        data: {
            judul: body.judul,
            jenis: body.jenis === 'SERIES' ? 'SERIES' : 'FILM',
            gambar: body.gambar,
            rating: Number(body.rating),
        },
    });

    return NextResponse.json(baru, { status: 201 });
}
