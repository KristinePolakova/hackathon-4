import Content from "./Components/Content"
import Login from "./Pages/Login"
import { useState } from "react"
import Footer from "./Components/Footer"

function App() {
  const [isLogin, setLogin] = useState(false)

  return (
    <div>
      <Content />
          {/* {isLogin && <Content /> || <Login setLogin={(status)=>setLogin(status)}/>} */}
      <Footer />
    </div>
  )
}

export default App