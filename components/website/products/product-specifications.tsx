interface Props {
  product: any;
}

export default function ProductSpecifications({
  product,
}: Props) {
  const specs = [
    {
      label: "Size",
      value: product.size,
    },

    {
      label: "Finish",
      value: product.finish,
    },

    {
      label: "Texture",
      value: product.texture,
    },

    {
      label: "Material",
      value: product.material,
    },

    {
      label: "Thickness",
      value:
        product.thickness,
    },
  ];

  return (
    <div className="border-t border-neutral-200 pt-10">
      <h2 className="text-3xl font-semibold mb-10">
        Technical Specifications
      </h2>

      <div className="space-y-6">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="flex justify-between border-b border-neutral-100 pb-5"
          >
            <p className="text-neutral-500">
              {spec.label}
            </p>

            <p className="font-medium">
              {spec.value || "-"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}