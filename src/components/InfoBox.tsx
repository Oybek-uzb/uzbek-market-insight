import { ReactNode } from "react";

interface InfoBoxProps {
  icon?: ReactNode;
  title?: string;
  children: ReactNode;
}

export const InfoBox = ({ icon, title, children }: InfoBoxProps) => {
  return (
    <div className="flex gap-3 items-start p-4 bg-card rounded-lg border border-border">
      {icon && <div className="flex-shrink-0 mt-1">{icon}</div>}
      <div className="flex-1">
        {title && <h4 className="font-semibold text-sm mb-2 text-card-foreground">{title}</h4>}
        <div className="text-xs text-muted-foreground leading-relaxed">{children}</div>
      </div>
    </div>
  );
};