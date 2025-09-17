import { useState, type JSX } from "react";

const App = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  const [theme, setTheme] = useState<string>("light");

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.classList.remove(
      "theme-light",
      "theme-dark",
      "theme-pink",
      "theme-blue"
    );
    document.documentElement.classList.add(`theme-${newTheme}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-mint-500 text-[--color-foreground]">
      <div className="w-full max-w-sm rounded-2xl shadow-lg p-6 bg-[--color-background] text-[--color-foreground] border">
        <h1 className="text-center text-2xl font-bold mb-2">
          Themed Counter App
        </h1>
        <p className="text-center text-sm mb-6">
          Vite + React + TypeScript + Tailwind
        </p>

        <div className="flex items-center justify-center space-x-4 mb-6">
          <button
            aria-label="decrement"
            onClick={() => setCount((c) => c - 1)}
            className="px-4 py-2 rounded-md bg-danger text-white hover:bg-danger/80 transition cursor-pointer"
          >
            −
          </button>

          <div className="text-3xl font-mono w-24 text-center">{count}</div>

          <button
            aria-label="increment"
            onClick={() => setCount((c) => c + 1)}
            className="px-4 py-2 rounded-md bg-success text-white hover:bg-success/80 transition cursor-pointer"
          >
            +
          </button>
        </div>

        <div className="flex justify-between mb-4">
          <button
            onClick={() => setCount(0)}
            className="px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-sm cursor-pointer"
          >
            Reset
          </button>

          <button
            onClick={() => setCount((c) => c + 5)}
            className="px-3 py-2 rounded-md bg-brand text-white hover:bg-brand/80 text-sm cursor-pointer"
          >
            +5
          </button>
        </div>

        {/* Theme Selector */}
        {/* <div className="flex justify-between items-center">
          <label htmlFor="theme" className="text-sm font-medium">
            Theme:
          </label>
          <select
            id="theme"
            value={theme}
            onChange={(e) => handleThemeChange(e.target.value)}
            className="ml-2 px-3 py-2 border rounded-md text-sm bg-[--color-background] text-[--color-foreground]"
          >
            <option value="light">🌞 Light</option>
            <option value="dark">🌙 Dark</option>
            <option value="pink">🎀 Baby Pink</option>
            <option value="blue">🌊 Light Blue</option>
          </select>
        </div> */}
      </div>
    </div>
  );
};

export default App;
