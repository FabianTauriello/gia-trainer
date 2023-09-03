import { ColumnDef, flexRender, getCoreRowModel, useReactTable, SortingState, getSortedRowModel } from "@tanstack/react-table";
import { useState } from "react";
import { BiSolidCaretUpSquare, BiSolidCaretDownSquare } from "react-icons/bi";

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
    <table className="w-full border-2 border-slate-200 dark:border-slate-700">
      <thead className="bg-white dark:bg-darkSlate">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="border-2 border-b-slate-200 dark:border-slate-700 border-t-0 border-x-0">
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="text-left p-3 border border-l-slate-200 dark:border-slate-700 border-r-0 border-y-0">
                {header.isPlaceholder ? null : (
                  <div
                    {...{
                      className: header.column.getCanSort() ? "cursor-pointer select-none flex justify-between" : "",
                      onClick: header.column.getToggleSortingHandler(),
                    }}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    <span className="flex justify-center items-center" style={{ width: "24px", textAlign: "center" }}>
                      {{
                        asc: <BiSolidCaretUpSquare size={20} />,
                        desc: <BiSolidCaretDownSquare size={20} />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </span>
                  </div>
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {data.length ? (
          <>
            {table.getRowModel().rows.map((row, i) => (
              <tr
                key={row.id}
                className="dark:even:bg-slate-900 even:bg-white hover:dark:bg-slate-700 hover:bg-slate-200 cursor-pointer"
                onClick={handleRowClick}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-3 border border-l-slate-200 dark:border-l-slate-700 border-r-0 border-y-0">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </>
        ) : (
          <tr className="">
            <td colSpan={3} className="p-4 text-center">
              No results
            </td>
          </tr>
        )}
      </tbody>
      {/* <pre>{JSON.stringify(sorting, null, 2)}</pre> */}
    </table>
  );
}
