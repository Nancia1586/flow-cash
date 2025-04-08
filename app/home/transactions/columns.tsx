"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Transaction = {
  id: string;
  amount: number;
  email: string;
  date: string; // Format YYYY-MM-DD
  category: string;
  type: "DEPENSE" | "REVENU" | "EPARGNE";
  debit: number;
  credit: number;
};

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "category",
    header: "Description",
  },
  {
    accessorKey: "type",
    header: "Type de transaction",
  },
  {
    accessorKey: "debit",
    header: "Debit",
  },
  {
    accessorKey: "credit",
    header: "Credit",
  },
];
