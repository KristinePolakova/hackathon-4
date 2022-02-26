import { Link } from "react-router-dom";
import '../Components/Header.css'
function Header() {
  return (
    <div>
      <nav className="container d-flex flew-column flex-md-row mt-4">
        <div className="navbar navbar-expand-md navbar-light d-flex flex-md-column">
          <Link className="navbar-brand" to="/categories">
          <img src="/images/logo.png" width="280" height="112" className="d-inline-block align-top" alt="logo"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse w-100 mt-3" id="navbarSupportedContent">
            <ul className="navbar-nav w-100 flex-md-column text-center text-md-end">
              <li className="nav-item active">
              <Link className="nav-link border rounded text-center" to="/categories">Categories</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link border rounded text-center" to="/products">Products</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link border rounded text-center" to="/orders">Orders</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;