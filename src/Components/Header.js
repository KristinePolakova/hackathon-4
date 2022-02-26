import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="container d-flex flew-column flex-md-row">
        <div className="navbar navbar-expand-md navbar-light bg-light d-flex flex-md-column">
        {/* <nav className="container">
        <div className="navbar navbar-light bg-light"> */}
          <Link className="navbar-brand" to="/categories">
          <img src="/images/logo.png" width="220" height="88" class="d-inline-block align-top" alt="logo"/>
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
          <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
            <ul className="navbar-nav w-100 flex-md-column text-center text-md-end">
              <li className="nav-item active">
              <Link className="nav-link" to="/categories">Categories</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/orders">Orders</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;