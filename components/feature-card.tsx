import { ReactElement } from "react";

export default function FeatureCard({
  title,
  icon,
  description,
  color,
}: {
  title: string;
  icon: ReactElement;
  description: string;
  color: string;
}) {
  return (
    <article className="bg-secondary border p-6 rounded-lg flex flex-col gap-3 relative overflow-clip">
      <div
        style={{ backgroundColor: color }}
        className="w-[50px] h-[50px] aspect-square rounded-full blur-3xl absolute top-0 right-0"
      />
      <div style={{ color }}>{icon}</div>
      <h2 className="text-foreground font-bold mt-2">{title}</h2>
      <p className="text-pretty">{description}</p>
    </article>
  );
}
