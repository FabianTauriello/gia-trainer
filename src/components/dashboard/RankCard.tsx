import { useGetCategoryRankingsQuery } from "domain/slices/apislice";
import { useAppSelector } from "hooks/useAppSelector";

function RankCard() {
  const { auth } = useAppSelector((state) => state);

  const { data: categoryRankings } = useGetCategoryRankingsQuery(auth.user!.id);

  return (
    <div className="p-6 flex flex-col rounded-lg card">
      <h1 className="text-lg p-3 font-bold">Rank by Category</h1>
      <ul>
        {categoryRankings?.data?.map((item, i) => {
          const even = i % 2 === 0;
          return (
            <li className={`p-3 flex justify-between ${even && "bg-slate-200 dark:bg-slate-700"}`}>
              <div>{item.category}</div>
              <div className="ml-10">{item.ranking}</div>
            </li>
          );
        })}
        {/* <li className="p-3 flex justify-between bg-slate-200 dark:bg-slate-700">
          <div>Reasoning</div>
          <div className="ml-10">1</div>
        </li>
        <li className="p-3 flex justify-between">
          <div>Perceptual Speed</div>
          <div className="ml-10">1</div>
        </li>
        <li className="p-3 flex justify-between bg-slate-200 dark:bg-slate-700">
          <div>Number Speed and Accuracy</div>
          <div className="ml-10">1</div>
        </li>
        <li className="p-3 flex justify-between">
          <div>Word Meaning</div>
          <div className="ml-10">1</div>
        </li>
        <li className="p-3 flex justify-between bg-slate-200 dark:bg-slate-700">
          <div>Spatial Visualisation</div>
          <div className="ml-10">1</div>
        </li> */}
      </ul>
    </div>
  );
}

export default RankCard;
