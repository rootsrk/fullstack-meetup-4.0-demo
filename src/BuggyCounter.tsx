import { useState } from "react";

export function BuggyCounter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
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
