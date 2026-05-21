import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
  try {
    const sections = await prisma.homepageSection.findMany();
    return NextResponse.json(sections);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to fetch homepage sections" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { key, ...data } = body;
    const section = await prisma.homepageSection.upsert({
      where: { key },
      update: data,
      create: { key, ...data },
    });
    return NextResponse.json(section);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to update homepage section" }, { status: 500 });
  }
}
