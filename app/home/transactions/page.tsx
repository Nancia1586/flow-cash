import { columns, Transaction } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Transaction[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1a2b3c4d",
      amount: 250.75,
      email: "user123@example.com",
      date: "2024-03-14",
      category: "Alimentation",
      type: "DEPENSE",
      debit: 250.75,
      credit: 0,
    },
    {
      id: "2b3c4d5e",
      amount: 500.0,
      email: "user456@example.com",
      date: "2024-03-13",
      category: "Revenu salarial",
      type: "REVENU",
      debit: 0,
      credit: 500.0,
    },
    {
      id: "3c4d5e6f",
      amount: 120.0,
      email: "user789@example.com",
      date: "2024-03-12",
      category: "Transport",
      type: "DEPENSE",
      debit: 120.0,
      credit: 0,
    },
    {
      id: "4d5e6f7g",
      amount: 300.0,
      email: "user234@example.com",
      date: "2024-03-11",
      category: "Epargne mensuelle",
      type: "EPARGNE",
      debit: 0,
      credit: 300.0,
    },
    {
      id: "5e6f7g8h",
      amount: 50.0,
      email: "user567@example.com",
      date: "2024-03-10",
      category: "Loisirs",
      type: "DEPENSE",
      debit: 50.0,
      credit: 0,
    },
    {
      id: "6f7g8h9i",
      amount: 700.0,
      email: "user890@example.com",
      date: "2024-03-09",
      category: "Revenu bonus",
      type: "REVENU",
      debit: 0,
      credit: 700.0,
    },
    {
      id: "7g8h9i0j",
      amount: 200.0,
      email: "user111@example.com",
      date: "2024-03-08",
      category: "Santé",
      type: "DEPENSE",
      debit: 200.0,
      credit: 0,
    },
    {
      id: "8h9i0j1k",
      amount: 100.0,
      email: "user222@example.com",
      date: "2024-03-07",
      category: "Epargne projet",
      type: "EPARGNE",
      debit: 0,
      credit: 100.0,
    },
    {
      id: "9i0j1k2l",
      amount: 80.5,
      email: "user333@example.com",
      date: "2024-03-06",
      category: "Alimentation",
      type: "DEPENSE",
      debit: 80.5,
      credit: 0,
    },
    {
      id: "0j1k2l3m",
      amount: 900.0,
      email: "user444@example.com",
      date: "2024-03-05",
      category: "Revenu freelance",
      type: "REVENU",
      debit: 0,
      credit: 900.0,
    },
    {
      id: "djsohi2i4",
      amount: 500.0,
      email: "user444@example.com",
      date: "2024-03-05",
      category: "Revenu freelance",
      type: "REVENU",
      debit: 0,
      credit: 900.0,
    },
    {
      id: "hsi3hir9",
      amount: 100.0,
      email: "user222@example.com",
      date: "2024-03-07",
      category: "Epargne projet",
      type: "EPARGNE",
      debit: 0,
      credit: 100.0,
    },
  ];
}

export default async function TransactionPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
