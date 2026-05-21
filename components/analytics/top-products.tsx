interface Props {
  products: any[];
}

export default function TopProducts({
  products,
}: Props) {
  return (
    <div className="bg-white rounded-2xl border p-6">
      <h2 className="text-2xl font-bold mb-5">
        Top Selling Products
      </h2>

      <div className="space-y-4">
        {products.map(
          (product, index) => (
            <div
              key={product.productId}
              className="flex justify-between border-b pb-3"
            >
              <div>
                <p className="font-semibold">
                  Product #
                  {index + 1}
                </p>

                <p className="text-gray-500">
                  Product ID:{" "}
                  {
                    product.productId
                  }
                </p>
              </div>

              <p className="font-bold">
                {
                  product._sum
                    .quantityBoxes
                }{" "}
                boxes
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}