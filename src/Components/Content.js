import { Route, Routes } from "react-router"
import Categories from "../Pages/Categories"
import Orders from "../Pages/Orders"
import Products from "../Pages/Products"
import Login from "../Pages/Login"
import Header from "../Components/Header"

function Content() {
  return (
      <div>
      <div className="container d-flex flew-column flex-md-row">
        <Header />
        <div className="ps-0 ps-md-5 flex-grow-1">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        </div>
      </div>
      </div>
  )
}

export default Content
