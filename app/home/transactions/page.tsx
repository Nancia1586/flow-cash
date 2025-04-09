import { columns } from "./columns";
import { data } from "./data";
import { DataTable } from "./data-table";

export default async function TransactionPage() {
  return (
    <div className="container mx-auto py-6">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
