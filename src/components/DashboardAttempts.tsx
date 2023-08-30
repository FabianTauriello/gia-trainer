import { useGetQuizAttemptsQuery } from "domain/slices/apislice";
import { useAppSelector } from "hooks/useAppSelector";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DataTable } from "./DataTable";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<{
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "completed",
    header: "Completed",
  },
];

export function DashboardAttempts() {
  const { quiz, auth } = useAppSelector((state) => state);

  const { data, isError, isLoading, isFetching, refetch, isSuccess } = useGetQuizAttemptsQuery(auth.user!.id);

  const [postData, setPostData] = useState<Post[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      console.log("res: ", res);
      if (res.ok) {
        const json = await res.json();
        setPostData(json);
      }
    } catch (error) {
      console.log("Failed to get post data");
    }
  }

  function getTime(time: string) {
    return new Date(time).toLocaleString();
  }

  return (
    <div className="dashContentContainer">
      <h1>Attempts list</h1>
      {postData ? <DataTable columns={columns} data={postData} /> : null}
    </div>
  );
}
