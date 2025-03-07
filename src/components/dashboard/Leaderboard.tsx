import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { DataTable } from "./DataTable";
import { categoryLeaderboardColumns, overallLeaderboardColumns } from "utils/Columns";
import { useGetLeaderboardQuery } from "domain/slices/apislice";

interface LeaderboardProps {}

export function Leaderboard({}: LeaderboardProps) {
  const [page, setPage] = useState(1);
  const [leaderboardSelection, setLeaderboardSelection] = useState("Overall");

  const { data: leaderboardResponse, isFetching } = useGetLeaderboardQuery({
    pageInfo: { page: page, limit: 20 },
    category: leaderboardSelection,
  });

  const dataFound = leaderboardResponse?.data?.records.length;

  const handleCategoryChange = (value: string) => {
    setLeaderboardSelection(value);
    setPage(1);
  };

  return (
    <div className="p-3 md:p-8">
      <div className="md:flex md:flex-row md:justify-between">
        {/* TODO turn categories into an enum or something? */}
        <Select defaultValue="Overall" onValueChange={handleCategoryChange}>
          <SelectTrigger className="md:w-[250px] dark:bg-slate-700">
            <SelectValue className="" />
          </SelectTrigger>
          <SelectContent className="dark:bg-slate-700">
            <SelectItem value="Overall">Overall</SelectItem>
            <SelectItem value="Reasoning">Reasoning</SelectItem>
            <SelectItem value="Perceptual Speed">Perceptual Speed</SelectItem>
            <SelectItem value="Number Speed and Accuracy">Number Speed and Accuracy</SelectItem>
            <SelectItem value="Word Meaning">Word Meaning</SelectItem>
            <SelectItem value="Spatial Visualisation">Spatial Visualisation</SelectItem>
          </SelectContent>
        </Select>
        <div>
          <div className="flex items-center justify-between mt-2 md:mt-0">
            {dataFound && <span className="text-sm mr-2">{`Page ${page} of ${leaderboardResponse?.data?.totalPages}`}</span>}
            <div className="gap-1 flex">
              <button
                className="bg-slate-300 dark:bg-slate-900 rounded-md p-1 disabled:opacity-50 border border-slate-200 dark:border-slate-700"
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
              >
                <PiCaretLeftBold size={18} />
              </button>
              <button
                className="bg-slate-300 dark:bg-slate-900 rounded-md p-1 disabled:opacity-20 border border-slate-200 dark:border-slate-700"
                disabled={page === leaderboardResponse?.data?.totalPages}
                onClick={() => setPage(page + 1)}
              >
                <PiCaretRightBold size={18} />
              </button>
            </div>
          </div>
          <div className="text-end text-xs my-2 text-slate-500 dark:text-slate-400">
            {leaderboardResponse?.data?.totalRecords ?? 0} results
          </div>
        </div>
      </div>
      <DataTable
        columns={leaderboardSelection === "Overall" ? overallLeaderboardColumns : categoryLeaderboardColumns}
        handleRowClick={() => {}}
        data={leaderboardResponse?.data?.records ?? Array(20).fill("")}
        fetchingData={isFetching}
      />
    </div>
  );
}
