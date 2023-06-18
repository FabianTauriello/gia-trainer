import { Category } from "domain/Types";

interface ScoreCardProps {
  categories: Category[];
}

export function ScoreCard({ categories }: ScoreCardProps) {
  const totalScore = categories.reduce((prev, current) => prev + current.score, 0);
  const maxScore = categories.reduce((prev, current) => prev + current.questions.length, 0);

  return (
    <div className="overflow-x-auto">
      <h1 className="mb-3 text-xl dark:text-white">Scorecard</h1>
      <table className="w-full border dark:border-slate-800 border-slate-300 dark:bg-slate-800 dark:text-white bg-slate-100">
        <thead>
          <tr className="border-b dark:border-b-slate-800 border-b-slate-300 dark:bg-darkSlate bg-white text-left dark:text-white">
            <th className="p-3 text-lg font-medium">Category</th>
            <th className="p-3 text-lg font-medium">Score</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat, i) => (
            <tr key={i} className="dark:even:bg-slate-900 even:bg-white">
              <td className="p-3">{cat.title}</td>
              <td className="p-3">{cat.score}</td>
            </tr>
          ))}
          <tr className="dark:bg-darkSlate bg-white text-left dark:text-white">
            <td />
            <td className="p-3 font-medium">
              {totalScore} / {maxScore}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
