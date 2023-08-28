import { useGetQuizAttemptsQuery } from "domain/slices/apislice";
import { useAppSelector } from "hooks/useAppSelector";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export function DashboardAttempts() {
  const { quiz, auth } = useAppSelector((state) => state);

  const { data, isError, isLoading, isFetching, refetch, isSuccess } = useGetQuizAttemptsQuery(auth.user!.id);

  function getTime(time: string) {
    return new Date(time).toLocaleString();
  }

  return (
    <>
      <h1>Attempts list</h1>
      <pre>
        {data?.data
          ? data?.data.map((i, index) => {
              return <div key={index}>{getTime(i.timestamp)}</div>;
            })
          : null}
      </pre>
    </>
  );
}
