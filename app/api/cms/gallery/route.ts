import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
  try {
    const gallery = await prisma.galleryItem.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(gallery);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to fetch gallery" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const item = await prisma.galleryItem.create({ data: body });
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to create gallery item" }, { status: 500 });
  }
}
