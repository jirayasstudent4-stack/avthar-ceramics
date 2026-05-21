import { LucideIcon } from "lucide-react";

interface Props {
  title: string;

  value: string;

  icon: LucideIcon;
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
}: Props) {
  return (
    <div className="bg-white rounded-[28px] p-7 border border-black/5 shadow-sm">
      <div className="flex items-start justify-between mb-8">
        <div>
          <p className="text-neutral-500 text-sm mb-3">
            {title}
          </p>

          <h2 className="text-4xl font-semibold tracking-tight">
            {value}
          </h2>
        </div>

        <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center">
          <Icon size={24} />
        </div>
      </div>

      <div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
        <div className="w-[70%] h-full bg-black rounded-full" />
      </div>
    </div>
  );
}