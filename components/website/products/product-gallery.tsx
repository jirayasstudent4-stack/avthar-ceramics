"use client";
import Image from "next/image";
interface Props {
  image: string;
}

export default function ProductGallery({
  image,
}: Props) {
  if (!image) {
    return null;
  }

  return (
    <div>
      <div className="overflow-hidden rounded-[40px] bg-neutral-100">
        <Image
          src={image}
          alt="Product"
          className="w-full h-[850px] object-cover hover:scale-105 transition duration-700"
          width={850}
          height={850}
        />
      </div>
    </div>
  );
}