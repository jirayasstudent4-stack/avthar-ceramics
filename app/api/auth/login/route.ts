import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { comparePassword } from "@/lib/hash";
import { generateToken } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, password } = body;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const isPasswordValid = await comparePassword(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = generateToken({
      id: user.id,
      role: user.role,
      branchId: user.branchId,
    });

    const response = NextResponse.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
    });

    return response;
  } catch (error: any) {
  console.log(error);

  return NextResponse.json(
    {
      error: error.message || "Something went wrong",
    },
    { status: 500 }
  );
}
}