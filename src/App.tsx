import { useState, type JSX } from "react";

const App = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-center text-2xl font-bold mb-2">Simple Counter App</h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Vite + React + TypeScript + Tailwind
        </p>

        <div className="flex items-center justify-center space-x-4 mb-6">
          <button
            aria-label="decrement"
            onClick={() => setCount((c) => c - 1)}
            className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
          >
            −
          </button>

          <div className="text-3xl font-mono w-24 text-center">{count}</div>

          <button
            aria-label="increment"
            onClick={() => setCount((c) => c + 1)}
            className="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
          >
            +
          </button>
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => setCount(0)}
            className="px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm"
          >
            Reset
          </button>

          <button
            onClick={() => setCount((c) => c + 5)}
            className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 text-sm"
          >
            +5
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
