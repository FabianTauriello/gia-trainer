import { useGetQuizAttemptsQuery } from "domain/slices/apislice";
import { useAppSelector } from "hooks/useAppSelector";
import { useContext, useState } from "react";
import { DataTable } from "./DataTable";
import { PiCaretRightBold, PiCaretLeftBold } from "react-icons/pi";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { attemptsColumns } from "utils/Columns";
import { DashboardContext } from "./DashboardContextProvider";
import { Review } from "components/quiz/Review";

// TODO fix issue where question answer modal/popup is covered partially by nav bar
// TODO prevent layout shift by making card fill 100% of height (see what happens when you reach last page)
export function Attempts() {
  const { activeAttempt, setActiveAttempt } = useContext(DashboardContext);
  const { auth } = useAppSelector((state) => state);

  const [page, setPage] = useState(1);

  const { data: attemptsResponse, isFetching } = useGetQuizAttemptsQuery({
    userId: auth.user!.id,
    pageInfo: { page: page, limit: 20 },
  });

  const dataFound = attemptsResponse?.data?.attempts?.length;

  return (
    <div className="p-3 md:p-8">
      {activeAttempt ? (
        <Review attempt={activeAttempt} embedWithinDash handleBackButton={() => setActiveAttempt(null)} />
      ) : (
        <>
          <div className="flex justify-between flex-wrap mb-4 md:mb-2">
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
            <div className="flex-col items-end">
              <div className="flex items-center mt-4 md:m-0 gap-2">
                {dataFound && <span className="text-sm mr-2">{`Page ${page} of ${attemptsResponse?.data?.totalPages}`}</span>}
                <button
                  className="bg-slate-300 dark:bg-slate-900 rounded-md p-1 disabled:opacity-50 border border-slate-200 dark:border-slate-700"
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                >
                  <PiCaretLeftBold size={18} />
                </button>
                <button
                  className="bg-slate-300 dark:bg-slate-900 rounded-md p-1 disabled:opacity-20 border border-slate-200 dark:border-slate-700"
                  disabled={page === attemptsResponse?.data?.totalPages}
                  onClick={() => setPage(page + 1)}
                >
                  <PiCaretRightBold size={18} />
                </button>
              </div>
              <span className="text-xs my-2 text-slate-500 dark:text-slate-400">
                {attemptsResponse?.data?.totalAttemptsCount ?? 0} results
              </span>
            </div>
          </div>
          <DataTable
            columns={attemptsColumns}
            data={attemptsResponse?.data?.attempts ?? Array(20).fill("")}
            handleRowClick={(attempt) => {
              window.scrollTo(0, 0);
              setActiveAttempt(attempt);
            }}
            fetchingData={isFetching}
          />
        </>
      )}
    </div>
  );
}
