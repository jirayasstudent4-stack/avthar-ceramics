import { NextResponse } from "next/server";

import prisma from "@/lib/db";

export async function GET() {
  const projects =
    await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

  return NextResponse.json(
    projects
  );
}

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();

    const project =
      await prisma.project.create({
        data: {
          title: body.title,

          slug: body.slug,

          description:
            body.description,

          coverImage:
            body.coverImage,

          location:
            body.location,

          year: body.year,

          isFeatured:
            body.isFeatured,
        },
      });

    return NextResponse.json({
      success: true,
      project,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          "Project creation failed",
      },
      {
        status: 500,
      }
    );
  }
}