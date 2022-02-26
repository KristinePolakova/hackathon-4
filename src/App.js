<<<<<<< Updated upstream
import Content from "./Components/Content"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
=======
import Orders from "./Components/Orders";
import Login from "./Pages/Login";
>>>>>>> Stashed changes

function App() {
  return (
    <div>
<<<<<<< Updated upstream
      <div className="container d-flex flew-column flex-md-row">
        <Header />
        <div className="ps-0 ps-md-5 flex-grow-1">
          <Content />
        </div>
      </div>
      <Footer />
=======

      <Orders />
      <Login />
>>>>>>> Stashed changes
    </div>
  )
}

export default App
