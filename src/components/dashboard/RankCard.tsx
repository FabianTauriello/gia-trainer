function RankCard() {
  return (
    <div className="p-6 flex flex-col rounded-lg card">
      <h1 className="text-lg border-b border-white pb-4">Rank by Category</h1>
      <ul>
        <li className="mt-4 flex justify-between">
          <div>Reasoning</div>
          <div className="ml-10">1</div>
        </li>
        <li className="mt-4 flex justify-between">
          <div>Perceptual Speed</div>
          <div className="ml-10">1</div>
        </li>
        <li className="mt-4 flex justify-between">
          <div>Number Speed and Accuracy</div>
          <div className="ml-10">1</div>
        </li>
        <li className="mt-4 flex justify-between">
          <div>Word Meaning</div>
          <div className="ml-10">1</div>
        </li>
        <li className="mt-4 flex justify-between">
          <div>Spatial Visualisation</div>
          <div className="ml-10">1</div>
        </li>
      </ul>
    </div>
  );
}

export default RankCard;
