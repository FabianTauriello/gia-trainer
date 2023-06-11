import { Category } from "domain/Types";

interface ScoreCardProps {
  categories: Category[];
}

export function ScoreCard({ categories }: ScoreCardProps) {
  const totalScore = categories.reduce((prev, current) => prev + current.score, 0);
  const maxScore = categories.reduce((prev, current) => prev + current.questions.length, 0);

  return (
    <div className="overflow-x-auto">
      <h1 className="mb-3 text-xl">Scorecard</h1>
      <table className="w-full border border-gray-300 bg-gray-100">
        <thead>
          <tr className="border-b border-b-gray-400 bg-primary-400 text-left text-white">
            <th className="p-3 text-lg font-medium">Category</th>
            <th className="p-3 text-lg font-medium">Score</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat, i) => (
            <tr key={i} className="odd:bg-white">
              <td className="p-3">{cat.title}</td>
              <td className="p-3">{cat.score}</td>
            </tr>
          ))}
          <tr className="">
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
