import { ColumnDef } from "@tanstack/react-table";
import { QuizAttempt } from "domain/types";
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
