"use client";

import axios from "axios";

interface Props {
  value: string;

  onChange: (
    value: string
  ) => void;
}

export default function ImageUpload({
  value,
  onChange,
}: Props) {
  async function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file =
      e.target.files?.[0];

    if (!file) return;

    // CLIENT VALIDATION

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (
      !allowedTypes.includes(
        file.type
      )
    ) {
      alert(
        "Only JPG, PNG, WEBP allowed"
      );

      return;
    }

    if (
      file.size >
      5 * 1024 * 1024
    ) {
      alert(
        "Max file size is 5MB"
      );

      return;
    }

    const reader =
      new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend =
      async () => {
        try {
          const res =
            await axios.post(
              "/api/upload",
              {
                file:
                  reader.result,

                type: file.type,

                size: file.size,
              }
            );

          onChange(
            res.data.url
          );
        } catch (error: any) {
          alert(
            error.response?.data
              ?.error ||
              "Upload failed"
          );
        }
      };
  }

  return (
    <div>
      <input
        type="file"
        accept="image/png,image/jpeg,image/webp"
        onChange={handleUpload}
      />

      <p className="text-sm text-gray-500 mt-2">
        JPG, PNG, WEBP only • Max 5MB
      </p>

      {value && (
        <img
          src={value}
          alt="Product"
          className="w-40 h-40 object-cover rounded-xl mt-4 border"
        />
      )}
    </div>
  );
}