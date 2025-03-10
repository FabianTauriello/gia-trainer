import { useGetCategoryRankingsQuery } from "domain/slices/apislice";
import { selectAuth } from "domain/slices/authSlice";
import { useAppSelector } from "hooks/useAppSelector";

function RankCard() {
  const auth = useAppSelector(selectAuth);

  const { data: categoryRankings } = useGetCategoryRankingsQuery(auth.user!.id);

  return (
    <div className="p-6 flex flex-col rounded-lg card">
      <h1 className="text-lg p-3 font-bold">Rank by Category</h1>
      <ul>
        {categoryRankings?.data?.length ? (
          <>
            {categoryRankings?.data?.map((item, i) => {
              const even = i % 2 === 0;
              return (
                <li key={item.category} className={`p-3 flex justify-between ${even && "bg-slate-200 dark:bg-slate-700"}`}>
                  <div>{item.category}</div>
                  <div className="ml-10">{item.ranking}</div>
                </li>
              );
            })}
          </>
        ) : (
          <div className="p-3">No rankings available</div>
        )}
      </ul>
    </div>
  );
}

export default RankCard;
