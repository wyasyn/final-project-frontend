import { PieChart, TrendingUp, Wallet } from "lucide-react";

export const navLinks = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Reports",
    path: "/reports",
  },
  {
    name: "Settings",
    path: "/settings",
  },
];

export const featuresData = [
  {
    title: "Expense Tracking",
    description:
      "Easily categorize and track your expenses to understand your spending habits.",
    icon: <PieChart className="h-8 w-8" />,
    color: "#4C1F7A",
  },
  {
    title: "Budget Planning",
    description:
      "Set budgets for different categories and receive alerts when you're close to your limits.",
    icon: <Wallet className="h-8 w-8" />,
    color: "#FA4032",
  },
  {
    title: "Investment Insights",
    description:
      "Get personalized investment recommendations based on your financial goals.",
    icon: <TrendingUp className="h-8 w-8" />,
    color: "#37AFE1",
  },
];
