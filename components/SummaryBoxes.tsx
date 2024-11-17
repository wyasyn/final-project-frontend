import { DollarSign, CreditCard, PiggyBank, TrendingUp } from "lucide-react";

import SummaryBox from "./SummaryBox";

export default function SummaryBoxes() {
  const boxes = [
    {
      icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
      title: "Total Income",
      value: "$4,550.00",
      percentage: "+20",
      progress: 0,
    },
    {
      icon: <CreditCard className="h-4 w-4 text-muted-foreground" />,
      title: "Total Expenses",
      value: "$3,200.00",
      percentage: "+10.5",
      progress: 0,
    },
    {
      icon: <TrendingUp className="h-4 w-4 text-muted-foreground" />,
      title: "Budget Progress",
      value: "70%",
      percentage: "",
      progress: 70,
    },
    {
      icon: <PiggyBank className="h-4 w-4 text-muted-foreground" />,
      title: "Savings Goals",
      value: "$10,000 / $15,000",
      progress: 66,
      percentage: "",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      {boxes.map((box) => (
        <SummaryBox
          key={box.title}
          icon={box.icon}
          title={box.title}
          value={box.value}
          percentage={box.percentage}
          progress={box.progress}
        />
      ))}
    </div>
  );
}
