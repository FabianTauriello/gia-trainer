import { useGetQuizAttemptsQuery } from "domain/slices/apislice";
import { useAppSelector } from "hooks/useAppSelector";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DataTable } from "./DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { QuizAttempt } from "domain/Types";
import { CustomTable } from "./CustomTable";
import { PiCaretRightBold, PiCaretLeftBold } from "react-icons/pi";
import { Utils } from "utils/Utils";

export const columns: ColumnDef<QuizAttempt>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    // accessorFn: row => row.timestamp,
    accessorKey: "timestamp",
    header: "Timestamp",
    cell: (props) => <span>{Utils.formatTimestamp(props.getValue<string>())}</span>,
  },
  {
    accessorKey: "totalScore",
    header: "Total Score",
  },
];

export function DashboardAttempts() {
  const { quiz, auth } = useAppSelector((state) => state);

  const [page, setPage] = useState(1);

  const {
    data: attemptsResponse,
    isError,
    isLoading,
    isFetching,
    refetch,
    isSuccess,
  } = useGetQuizAttemptsQuery({ userId: auth.user!.id, pageInfo: { page: page, limit: 20 } });

  return (
    <div className="dashContentContainer">
      <DataTable columns={columns} data={attemptsResponse?.data?.attempts ?? []} />
      <div className="card p-4">
        <div className="flex justify-between items-center">
          <h1 className="">Attempts</h1>
          <div>
            <button
              className="bg-slate-300 dark:bg-slate-900 rounded-md p-1 disabled:opacity-50 border border-slate-200 dark:border-slate-700"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              <PiCaretLeftBold size={18} />
            </button>
            <button
              className="bg-slate-300 dark:bg-slate-900 rounded-md p-1 disabled:opacity-50 border border-slate-200 dark:border-slate-700"
              disabled={page === attemptsResponse?.data?.totalPages}
              onClick={() => setPage(page + 1)}
            >
              <PiCaretRightBold size={18} />
            </button>
          </div>
        </div>
        <p>{attemptsResponse?.data?.totalAttemptsCount ?? 0} results</p>
        <CustomTable columns={columns} data={attemptsResponse?.data?.attempts ?? []} handleRowClick={() => {}} />
      </div>
    </div>
  );
}
