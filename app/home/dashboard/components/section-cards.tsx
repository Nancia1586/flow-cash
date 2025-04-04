import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatAmount } from "@/lib/utils";

export function SectionCards() {
  const data = [
    {
      key: "balance",
      title: "Solde actuel",
      amount: 2780000,
      percent: 12.5,
      backgroundColor: "",
    },
    {
      key: "income",
      title: "Total des revenus",
      amount: 4257300,
      percent: -20,
      backgroundColor: "bg-[#22844e]",
    },
    {
      key: "expense",
      title: "Total des dépenses",
      amount: 2238900,
      percent: 12.5,
      backgroundColor: "bg-[#d95c5e]",
    },
    {
      key: "saving",
      title: "Epargne",
      amount: 2107600,
      percent: 4.5,
      backgroundColor: "bg-[#daa520]",
    },
  ];

  return (
    <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 lg:px-6 text-white">
      {data.map((item) => (
        <Card
          key={item.key}
          className={`@container/card ${
            item.key !== "balance" && "text-white"
          } ${item.backgroundColor}`}
        >
          <CardHeader className="relative">
            <CardDescription
              className={`${item.key !== "balance" && "text-white"}`}
            >
              {item.title}
            </CardDescription>
            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
              {formatAmount(item.amount)}
            </CardTitle>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 py-1 text-sm">
            <div className="line-clamp-1">
              {item.percent > 0 ? (
                <p
                  className={`flex gap-2 ${
                    item.key === "balance" && "text-green-700"
                  }`}
                >
                  En hausse de {Math.abs(item.percent)}% ce mois-ci{" "}
                  <TrendingUpIcon className="size-4" />
                </p>
              ) : (
                <p
                  className={`flex gap-2 ${
                    item.key === "balance" && "text-red-700"
                  }`}
                >
                  En baisse de {Math.abs(item.percent)}% ce mois-ci{" "}
                  <TrendingDownIcon className="size-4" />
                </p>
              )}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
