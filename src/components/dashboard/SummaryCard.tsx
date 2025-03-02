import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { TbTargetArrow } from "react-icons/tb";
import { GiArrowhead, GiStrikingArrows } from "react-icons/gi";
import { IoPodiumOutline } from "react-icons/io5";
import { SlTrophy } from "react-icons/sl";
import { MdDateRange } from "react-icons/md";
import { useAppSelector } from "hooks/useAppSelector";
import { format } from "date-fns";
import {
  useGetAllQuizAttemptsQuery,
  useGetCategoryRankingsQuery,
  useGetOverallRankingQuery,
  useGetRankingHistoryQuery,
} from "domain/slices/apislice";
import { ReactElement } from "react";
import { Ranking } from "domain/types";

function SummaryCard() {
  const { auth } = useAppSelector((state) => state);

  const { data: quizAttempts } = useGetAllQuizAttemptsQuery(auth.user!.id);
  const { data: rankings } = useGetRankingHistoryQuery(auth.user!.id);
  const { data: overallRanking } = useGetOverallRankingQuery(auth.user!.id);

  const bestAttempt = quizAttempts?.data?.reduce((acc, attempt) => {
    return attempt.totalScore > acc.totalScore ? attempt : acc;
  }, quizAttempts.data[0]);
  const bestAttemptValue = bestAttempt ? `${bestAttempt.totalScore} (${(bestAttempt.overallAccuracy * 100).toFixed(0)}%)` : "_";

  const latestAttempt = quizAttempts?.data?.reduce((acc, attempt) => (attempt.id > acc.id ? attempt : acc), quizAttempts.data[0]);
  const latestAttemptLabel = latestAttempt
    ? `${latestAttempt.totalScore} (${(latestAttempt.overallAccuracy * 100).toFixed(0)}%)`
    : "_";
  const bestRank = getBestRank(rankings?.data);
  const currentRank = overallRanking?.data;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 p-6 card">
      <Badge
        tooltipText="Date Joined"
        value={format(new Date(auth.user?.signUpTimestamp!), "MMM dd, yyyy")}
        icon={<MdDateRange size={30} />}
      />
      <Badge tooltipText="Current Overall Rank" value={currentRank ?? "_"} icon={<IoPodiumOutline size={30} />} />
      <Badge tooltipText="Best Overall Rank" value={bestRank} icon={<SlTrophy size={30} />} />
      <Badge tooltipText="Latest Attempt" value={latestAttemptLabel} icon={<GiArrowhead size={30} />} />
      <Badge tooltipText="Best Attempt" value={bestAttemptValue} icon={<TbTargetArrow size={30} />} />
      <Badge tooltipText="Number of Attempts" value={quizAttempts?.data?.length ?? "_"} icon={<GiStrikingArrows size={30} />} />
    </div>
  );
}

// TODO replace tooltip for actual text for mobile devices because they won't work there!
function Badge({ tooltipText, value, icon }: { tooltipText: string; value: string | number; icon: ReactElement }) {
  return (
    <div className="flex justify-center items-center flex-col shadow-md rounded-md p-2">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>{icon}</TooltipTrigger>
          <TooltipContent>
            <p>{tooltipText}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="mt-3 text-xs md:text-sm text-center">{value}</div>
    </div>
  );
}

function getBestRank(rankings?: Ranking[]) {
  if (!rankings || !rankings.length) return "_";

  const overallRankings = rankings.filter((r) => !r.category);
  const bestRank = overallRankings.reduce((acc, current) => {
    return current.position > acc.position ? current : acc;
  });

  return bestRank.position.toString();
}

export default SummaryCard;
