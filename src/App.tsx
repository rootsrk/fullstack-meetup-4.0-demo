import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useCustomState } from "./hooks/useCustomState";
import { useCustomEffect } from "./hooks/useCustomEffect";

function App() {
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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
