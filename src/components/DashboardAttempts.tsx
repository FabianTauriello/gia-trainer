import { useGetQuizAttemptsQuery } from "domain/slices/apislice";
import { useAppSelector } from "hooks/useAppSelector";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ColumnDef } from "@tanstack/react-table";
import { QuizAttempt } from "domain/Types";
import { CustomTable } from "./CustomTable";
import { PiCaretRightBold, PiCaretLeftBold } from "react-icons/pi";
import { Utils } from "utils/Utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const columns: ColumnDef<QuizAttempt>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
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

  const dataFound = attemptsResponse?.data?.attempts?.length;

  return (
    <div className="dashContentContainer">
      <div className="card p-4">
        <div className="flex justify-between flex-wrap">
          <Select defaultValue="all attempts">
            <SelectTrigger className="w-[180px] dark:bg-slate-700">
              <SelectValue className="" />
            </SelectTrigger>
            <SelectContent className="dark:bg-slate-700">
              <SelectItem value="all attempts">All Attempts</SelectItem>
              {/* TODO have other select items for when a user can complete an individual category */}
              {/* <SelectItem value="reasoning">Reasoning</SelectItem> */}
              {/* <SelectItem value="perceptual speed">Perceptual Speed</SelectItem> */}
              {/* <SelectItem value="number speed and accuracy">Number Speed and Accuracy</SelectItem> */}
              {/* <SelectItem value="word meaning">Word Meaning</SelectItem> */}
              {/* <SelectItem value="spatial visualisation">Spatial Visualisation</SelectItem> */}
            </SelectContent>
          </Select>
          <div className="flex flex-col items-end">
            <div className="flex items-center">
              {dataFound && <span className="text-sm mr-2">{`Page ${page} of ${attemptsResponse?.data?.totalPages}`}</span>}
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
            <span className="text-xs my-1 text-slate-500 dark:text-slate-400">
              {attemptsResponse?.data?.totalAttemptsCount ?? 0} results
            </span>
          </div>
        </div>
        <CustomTable columns={columns} data={attemptsResponse?.data?.attempts ?? []} handleRowClick={() => {}} />
      </div>
    </div>
  );
}
