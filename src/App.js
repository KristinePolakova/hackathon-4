
import Content from "./Components/Content"
import Footer from "./Components/Footer"
import Header from "./Components/Header"

function App() {
  return (
    <div>
      <div className="container d-flex flew-column flex-md-row">
        <Header />
        <div className="ps-0 ps-md-5 flex-grow-1">
          <Content />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
