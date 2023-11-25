import { useState } from "react";
import { useCustomEffect } from "./hooks/useCustomEffect";
import { useCustomState } from "./hooks/useCustomState";

export function Home() {
  const [count, setCount] = useState(0);
  const [customCount, setCustomCount] = useCustomState(0);

  // Usage example of the custom effect hook.
  useCustomEffect(() => {
    console.log("Custom effect has run");

    // Optional cleanup function returned by the effect.
    return () => {
      console.log("Cleanup before the next effect or on unmount");
    };
  }, [count]);

  return (
    <>
      <div className="card">
        <p>
          A button with its state controlled using React's <code>useState</code>{" "}
          hook
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="card">
        <p>
          A button with its state controlled using <code>useCustomState</code>{" "}
          hook
        </p>
        <button onClick={() => setCustomCount((c) => c + 1)}>
          count with custom useState hook is {customCount}
        </button>
      </div>
    </>
  );
}
