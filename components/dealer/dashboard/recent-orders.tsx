type Order = {
  id: string;
  orderNumber: string;
  totalAmount: number;
  status: string;
  createdAt: Date;
};

export default function RecentOrders({ orders }: { orders: Order[] }) {
  return (
    <div className="bg-white rounded-2xl border p-6">
      <h2 className="text-lg font-bold mb-4">Recent Orders</h2>

      <div className="overflow-hidden rounded-xl border">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left text-sm">Order #</th>
              <th className="p-4 text-left text-sm">Amount</th>
              <th className="p-4 text-left text-sm">Status</th>
              <th className="p-4 text-left text-sm">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="p-4 font-medium text-sm">{order.orderNumber}</td>
                <td className="p-4 text-sm">₹{order.totalAmount.toLocaleString()}</td>
                <td className="p-4">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      order.status === "COMPLETED"
                        ? "bg-green-100 text-green-700"
                        : order.status === "PENDING"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-4 text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td colSpan={4} className="p-6 text-center text-gray-400">
                  No orders yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
