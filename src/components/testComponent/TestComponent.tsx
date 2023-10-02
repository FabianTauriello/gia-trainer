import { useState } from "react";

export function TestComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello World</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>increment count</button>
    </div>
  );
}
