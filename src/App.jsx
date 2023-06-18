import { useState } from 'react'
import { Card } from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div
        style={{
          backgroundImage: `url(./src/assets/background.png)`,
          height: "100vh",
          width: "100vw",
          zIndex: -1,
        }}
      >
        <div
          style={{
            backgroundColor: "#def0d6AA",
            backdropFilter: "blur(100px)",
            height: "100%",
            width: "100%",
          }}
        >
          <Card/>
        </div>
      </div>
    </>
  )
}

export default App
