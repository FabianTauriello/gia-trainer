import { useGetQuizAttemptsQuery } from "domain/slices/apislice";
import { useAppSelector } from "hooks/useAppSelector";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DataTable } from "./DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { QuizAttempt } from "domain/Types";

export const columns: ColumnDef<QuizAttempt>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "timestamp",
    header: "Timestamp",
  },
  {
    accessorKey: "totalScore",
    header: "Total Score",
  },
];

export function DashboardAttempts() {
  const { quiz, auth } = useAppSelector((state) => state);

  const {
    data: response,
    isError,
    isLoading,
    isFetching,
    refetch,
    isSuccess,
  } = useGetQuizAttemptsQuery({ userId: auth.user!.id, pageInfo: { page: 1, limit: 20 } });

  // console.log("data: ", attempts?.data);

  return (
    <div className="dashContentContainer">
      <h1>Attempts</h1>
      <DataTable columns={columns} data={response?.data?.attempts ?? []} />
    </div>
  );
}
