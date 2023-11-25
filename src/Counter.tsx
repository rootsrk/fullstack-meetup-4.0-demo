import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  return (
    <div className="card">
      <p>
        A button with its state controlled using React's <code>useState</code>{" "}
        hook
      </p>
      <button onClick={incrementCount}>count is {count}</button>
    </div>
  );
}
