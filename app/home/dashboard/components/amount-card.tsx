import { Card, CardContent } from "@/components/ui/card";
import { formatAmount } from "@/lib/utils";
import { cloneElement, JSX } from "react";

type CardProps = {
  icon: JSX.Element;
  title: string;
  amount: number;
};

export const AmountCard = ({ icon, title, amount }: CardProps) => {
  return (
    <Card>
      <CardContent>
        <div className="gap-5 lg:flex">
          <div className="flex justify-center lg:justify-start lg:w-1/4">
            {cloneElement(icon, { className: "w-full h-auto max-w-[100px]" })}
          </div>
          <div className="grid grid-rows-2 items-center not-lg:text-center">
            <span className="text-muted-foreground text-xl">{title}</span>
            <h2 className="text-xl text-primary font-medium">
              {formatAmount(amount)}
            </h2>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
