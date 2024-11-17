import { Progress } from "./ui/progress";
import { ReactElement } from "react";
export default function SummaryBox({
  icon,
  title,
  value,
  percentage,
  progress,
}: {
  icon: ReactElement;
  title: string;
  value: string;
  percentage?: string;
  progress: number;
}) {
  return (
    <div className="bg-secondary p-4 rounded-lg flex flex-col gap-3 border">
      <h3 className="flex items-center justify-between gap-5 text-foreground font-medium">
        {title} {icon}
      </h3>
      <h4 className="text-2xl font-bold">{value}</h4>
      {progress ? (
        <Progress value={70} className="mt-2" />
      ) : (
        <p className="text-xs text-muted-foreground">
          {percentage}% from last month
        </p>
      )}
    </div>
  );
}
