import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string;
  icon: LucideIcon;
}

export default function StatsCard({ title, value, icon: Icon }: Props) {
  return (
    <div className="bg-white rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 md:p-7 border border-black/5 shadow-sm">
      <div className="flex items-start justify-between mb-5 sm:mb-7">
        <div>
          <p className="text-neutral-500 text-xs sm:text-sm mb-2 sm:mb-3">
            {title}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            {value}
          </h2>
        </div>

        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-black text-white flex items-center justify-center shrink-0">
          <Icon size={18} className="sm:hidden" />
          <Icon size={22} className="hidden sm:block md:hidden" />
          <Icon size={24} className="hidden md:block" />
        </div>
      </div>

      <div className="h-1.5 sm:h-2 rounded-full bg-neutral-100 overflow-hidden">
        <div className="w-[70%] h-full bg-black rounded-full" />
      </div>
    </div>
  );
}
