import { ColumnDef } from "@tanstack/react-table";
import { OverallLeaderboardRecord, QuizAttempt } from "domain/types";
import { Utils } from "./Utils";

export const attemptsColumns: ColumnDef<QuizAttempt>[] = [
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

export const overallLeaderboardColumns: ColumnDef<OverallLeaderboardRecord>[] = [
  {
    accessorKey: "position",
    header: "Position",
  },
  {
    id: "name",
    header: "Name",
    cell: (props) => {
      const { firstName, lastName, exposeName } = props.row.original;
      return exposeName ? `${firstName} ${lastName}` : "********";
    },
  },
  {
    accessorKey: "averageScore",
    header: "Average Score",
  },
  {
    accessorKey: "averageAccuracy",
    header: "Average Accuracy",
  },
];

export const categoryLeaderboardColumns: ColumnDef<OverallLeaderboardRecord>[] = [
  {
    accessorKey: "position",
    header: "Position",
  },
  {
    id: "name",
    header: "Name",
    cell: (props) => {
      const { firstName, lastName, exposeName } = props.row.original;
      return exposeName ? `${firstName} ${lastName}` : "********";
    },
  },
  {
    accessorKey: "averageAccuracy",
    header: "Average Accuracy",
  },
];
