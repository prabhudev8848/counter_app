import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <div>
      </div>
      <h1>Simple Couter App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
