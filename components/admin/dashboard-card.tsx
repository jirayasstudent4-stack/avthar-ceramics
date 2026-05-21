interface Props {
  title: string;

  value: string;

  subtitle?: string;

  growth?: string;

  growthPositive?: boolean;

  progress?: number;

  icon?: React.ReactNode;
}

export default function DashboardCard({
  title,
  value,
  subtitle,
  growth,
  growthPositive = true,
  progress = 0,
  icon,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {value}
          </h3>

          {subtitle && (
            <p className="mt-1 text-sm text-gray-500">
              {subtitle}
            </p>
          )}
        </div>

        {icon}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span
          className={`rounded-full border px-2 py-1 text-xs font-medium ${
            growthPositive
              ? "border-green-100 bg-green-50 text-green-600"
              : "border-red-100 bg-red-50 text-red-600"
          }`}
        >
          {growth}
        </span>

        <span className="text-xs text-gray-500">
          Performance {progress}%
        </span>
      </div>

      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-100">
        <div
          className={`h-full rounded-full ${
            growthPositive
              ? "bg-green-500"
              : "bg-red-500"
          }`}
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}