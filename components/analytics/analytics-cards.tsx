interface Props {
  revenue: number;

  totalSales: number;

  totalProducts: number;

  totalCustomers: number;

  lowStock: number;
}

export default function AnalyticsCards({
  revenue,
  totalSales,
  totalProducts,
  totalCustomers,
  lowStock,
}: Props) {
  const cards = [
    {
      title: "Revenue",
      value: `₹${revenue.toFixed(
        2
      )}`,
    },

    {
      title: "Sales",
      value: totalSales,
    },

    {
      title: "Products",
      value: totalProducts,
    },

    {
      title: "Customers",
      value: totalCustomers,
    },

    {
      title: "Low Stock",
      value: lowStock,
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-5 mb-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl border p-6"
        >
          <p className="text-gray-500 mb-2">
            {card.title}
          </p>

          <h2 className="text-3xl font-bold">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}