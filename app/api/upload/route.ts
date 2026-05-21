import { NextResponse } from "next/server";

import cloudinary from "@/lib/cloudinary";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();

    const file = body.file;

    const type = body.type;

    const size = body.size;

    if (!file) {
      return NextResponse.json(
        {
          error: "File is required",
        },
        {
          status: 400,
        }
      );
    }

    // MIME TYPE VALIDATION
    if (
      !ALLOWED_TYPES.includes(type)
    ) {
      return NextResponse.json(
        {
          error:
            "Invalid image format",
        },
        {
          status: 400,
        }
      );
    }

    // FILE SIZE VALIDATION
    if (size > MAX_FILE_SIZE) {
      return NextResponse.json(
        {
          error:
            "File size exceeds 5MB",
        },
        {
          status: 400,
        }
      );
    }

    const uploadedImage =
      await cloudinary.uploader.upload(
        file,
        {
          folder:
            "avthar-products",

          resource_type: "image",
        }
      );

    return NextResponse.json({
      success: true,

      url:
        uploadedImage.secure_url,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error:
          "Upload failed",
      },
      {
        status: 500,
      }
    );
  }
}