"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { TransactionType } from "@/types/transaction";
import { formatAmount } from "@/lib/utils";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Transaction = {
  id: number;
  date: string;
  description: string;
  category: string;
  type: TransactionType;
  debit: number;
  credit: number;
};

const typeBadgeVariant: {
  [key: string]: { label: string; color: string };
} = {
  [TransactionType.INCOME]: { label: "Revenu", color: "bg-income-color" },
  [TransactionType.EXPENSE]: { label: "Dépense", color: "bg-expense-color" },
  [TransactionType.SAVING]: { label: "Epargne", color: "bg-saving-color" },
};

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "date",
    header: () => <div className="pl-3">Date</div>,
    cell: ({ row }) => (
      <div className="pl-3 py-1 text-sm">{row.original.date}</div>
    ),
    enableHiding: false,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <div className="text-muted-foreground">{row.original.description}</div>
    ),
  },
  {
    accessorKey: "category",
    header: "Catégorie",
    cell: ({ row }) => (
      <div className="w-32">
        <Badge variant="outline" className="px-1.5 text-muted-foreground">
          {row.original.category}
        </Badge>
      </div>
    ),
    enableHiding: false,
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => (
      <div className="w-32">
        <Badge
          className={`px-1.5 text-white ${
            typeBadgeVariant[row.original.type].color
          }`}
        >
          {typeBadgeVariant[row.original.type].label}
        </Badge>
      </div>
    ),
  },
  {
    accessorKey: "debit",
    header: "Debit",
    cell: ({ row }) => (
      <div className="text-sm">{formatAmount(row.original.debit)}</div>
    ),
    enableHiding: false,
  },
  {
    accessorKey: "credit",
    header: "Credit",
    cell: ({ row }) => (
      <div className="text-sm">{formatAmount(row.original.credit)}</div>
    ),
    enableHiding: false,
  },
];
