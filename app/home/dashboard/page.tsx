import { AmountCard } from "./components/amount-card";
import {
  FcBearish,
  FcBullish,
  FcMoneyTransfer,
  FcSalesPerformance,
} from "react-icons/fc";

export default function Dashboard() {
  return (
    <div className="w-full space-y-4 p-4">
      <div className="w-full rounded-sm border p-4"></div>
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
        <AmountCard
          icon={<FcBullish />}
          title="Mes revenus"
          amount={23450000}
        />
        <AmountCard
          icon={<FcBearish />}
          title="Mes dépenses"
          amount={11267400}
        />
      </div>
    </div>
  );
}
