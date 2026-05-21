type InventoryItem = {
  id: string;
  product: { name: string; sku: string };
  boxes: number;
  pieces: number;
};

export default function InventoryStatus({ items }: { items: InventoryItem[] }) {
  return (
    <div className="bg-white rounded-2xl border p-6">
      <h2 className="text-lg font-bold mb-4">Inventory Status</h2>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border rounded-xl p-4"
          >
            <div>
              <p className="font-medium text-sm">{item.product.name}</p>
              <p className="text-xs text-gray-400">{item.product.sku}</p>
            </div>

            <div className="flex gap-4 text-right">
              <div>
                <p className="font-bold">{item.boxes}</p>
                <p className="text-xs text-gray-400">Boxes</p>
              </div>
              <div>
                <p className="font-bold">{item.pieces}</p>
                <p className="text-xs text-gray-400">Pieces</p>
              </div>
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <p className="text-gray-400 text-sm">No inventory data.</p>
        )}
      </div>
    </div>
  );
}
