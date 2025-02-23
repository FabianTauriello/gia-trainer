import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { TbTargetArrow } from "react-icons/tb";
import { GiArrowhead, GiStrikingArrows } from "react-icons/gi";
import { IoPodiumOutline } from "react-icons/io5";
import { SlTrophy } from "react-icons/sl";
import { MdDateRange } from "react-icons/md";
import { useAppSelector } from "hooks/useAppSelector";
import { format } from "date-fns";
import { useGetAllQuizAttemptsQuery } from "domain/slices/apislice";

function SummaryCard() {
  const { auth } = useAppSelector((state) => state);

  const { data: quizAttempts, isError } = useGetAllQuizAttemptsQuery(auth.user!.id);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 p-6 card">
      <DashValue
        tooltipText="Date Joined"
        value={format(new Date(auth.user?.signUpTimestamp!), "MMM dd, yyyy")}
        icon={<MdDateRange size={30} />}
      />
      <DashValue tooltipText="Current Rank" value="4th" icon={<IoPodiumOutline size={30} />} />
      <DashValue tooltipText="Best Rank" value="1st" icon={<SlTrophy size={30} />} />
      <DashValue tooltipText="Latest Attempt" value="70%" icon={<GiArrowhead size={30} />} />
      <DashValue tooltipText="Best Attempt" value="100%" icon={<TbTargetArrow size={30} />} />
      <DashValue tooltipText="Number of Attempts" value={quizAttempts?.data?.length ?? "?"} icon={<GiStrikingArrows size={30} />} />
    </div>
  );
}

// TODO replace tooltip for actual text for mobile devices because they won't work there!
function DashValue({ tooltipText, value, icon }: { tooltipText: string; value: string | number; icon: ReactElement }) {
  return (
    <div className="flex justify-center items-center flex-col shadow-md rounded-md">
      <TooltipProvider>
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

export default SummaryCard;
