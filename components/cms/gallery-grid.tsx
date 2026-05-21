interface Props {
  items: any[];
}

export default function GalleryGrid({
  items,
}: Props) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="border rounded-2xl overflow-hidden"
        >
          <img
            src={item.image}
            alt=""
            className="w-full h-64 object-cover"
          />
        </div>
      ))}
    </div>
  );
}