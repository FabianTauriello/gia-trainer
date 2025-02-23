import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TimeRange } from "domain/types";

const timeRanges: TimeRange[] = [
  { label: "Last 30 Days", value: 30 },
  { label: "Last 90 Days", value: 90 },
  { label: "All Time", value: Infinity },
];

interface TimeRangeTabsProps {
  handleChange: (newTimeRange: TimeRange) => void;
}

function TimeRangeTabs({ handleChange }: TimeRangeTabsProps) {
  function onTimeRangeChange(value: string) {
    const timeRangeFound = timeRanges.find((range) => range.label === value)!;
    handleChange(timeRangeFound);
  }

  return (
    <Tabs defaultValue={timeRanges[0].label} className="mb-4" onValueChange={(value) => onTimeRangeChange(value)}>
      <TabsList className="w-full h-auto">
        {timeRanges.map((timeRange) => (
          <TabsTrigger key={timeRange.label} className="flex-1 text-xs" value={timeRange.label}>
            {timeRange.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

export default TimeRangeTabs;
