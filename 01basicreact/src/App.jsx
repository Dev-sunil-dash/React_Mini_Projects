import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter Program</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>Add</button>
        <button onClick={() => setCount((count) => count - 1)}>Sub</button>
        <p>
          count is <span style={{color:"yellow"}}> {count}</span>
        </p>
      </div>
    </>
  )
}

export default App
