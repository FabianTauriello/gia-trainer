import { Category } from "domain/Types";

export function ScoreCard({ categories }: { categories: Category[] }) {
  const total = categories.reduce((prev, current) => prev + current.score, 0);
  return (
    <div className="">
      <div className="rounded-xl p-4">
        <h1>Scorecard</h1>
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="p-3">Category</th>
              <th className="p-3">Score</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, i) => (
              <tr key={i} className="">
                <td className="p-3">{cat.title}</td>
                <td className="p-3">{cat.score}</td>
              </tr>
            ))}
            <tr className="">
              <td />
              <td className="p-3">{total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
