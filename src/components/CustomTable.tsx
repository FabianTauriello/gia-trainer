import { ColumnDef, flexRender, getCoreRowModel, useReactTable, SortingState, getSortedRowModel } from "@tanstack/react-table";
import { useState } from "react";

type CustomTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  handleRowClick: () => void;
};

export function CustomTable<TData, TValue>({ columns, data, handleRowClick }: CustomTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualPagination: true,
    pageCount: -1,
  });

  return (
    <table className="w-full border dark:border-slate-700 border-slate-300">
      <thead className="bg-white dark:bg-darkSlate">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="text-left p-3">
                {header.isPlaceholder ? null : (
                  <div
                    {...{
                      className: header.column.getCanSort() ? "cursor-pointer select-none" : "",
                      onClick: header.column.getToggleSortingHandler(),
                    }}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{
                      asc: " 🔼",
                      desc: " 🔽",
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row, i) => (
          <tr
            key={row.id}
            className="dark:even:bg-slate-900 even:bg-white hover:dark:bg-slate-700 hover:bg-slate-200 cursor-pointer"
            onClick={handleRowClick}
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="p-3">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <pre>{JSON.stringify(sorting, null, 2)}</pre>
    </table>
  );
}
