import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  icon?: ReactNode;
  value: string;
  unit?: string;
  label: string;
  variant?: "default" | "large";
}

export const StatCard = ({ icon, value, unit, label, variant = "default" }: StatCardProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      {icon && <div className="mb-2">{icon}</div>}
      <div className="flex items-baseline gap-1">
        <span className={`font-bold text-primary ${variant === "large" ? "text-5xl md:text-6xl" : "text-3xl md:text-4xl"}`}>
          {value}
        </span>
        {unit && <span className="text-lg text-muted-foreground">{unit}</span>}
      </div>
      <p className="text-sm text-center text-muted-foreground font-medium">{label}</p>
    </div>
  );
};
