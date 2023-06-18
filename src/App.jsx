import { Card } from './Components/Card'
import Background from './assets/background.png'
function App() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Background})`,
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
