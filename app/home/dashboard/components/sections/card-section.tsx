import {
  FcBearish,
  FcBullish,
  FcMoneyTransfer,
  FcSalesPerformance,
} from "react-icons/fc";
import { AmountCard } from "../amount-card";

export const CardSection = () => {
  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
      <AmountCard
        icon={<FcMoneyTransfer />}
        title="Mon solde"
        amount={12250000}
      />
      <AmountCard
        icon={<FcSalesPerformance />}
        title="Mon epargne"
        amount={2389000}
      />
      <AmountCard icon={<FcBullish />} title="Mes revenus" amount={23450000} />
      <AmountCard icon={<FcBearish />} title="Mes dépenses" amount={11267400} />
    </div>
  );
};
