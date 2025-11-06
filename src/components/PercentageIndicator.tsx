import { ReactNode } from "react";

interface PercentageIndicatorProps {
  value: number;
  icon?: ReactNode;
  label: string;
}

export const PercentageIndicator = ({ value, icon, label }: PercentageIndicatorProps) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-baseline gap-2">
        <span className="text-6xl md:text-7xl font-bold text-primary">{value}</span>
        {icon}
      </div>
      <p className="text-center text-sm font-bold text-card-foreground uppercase leading-tight max-w-xs">
        {label}
      </p>
    </div>
  );
};