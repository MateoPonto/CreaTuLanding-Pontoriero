import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Mi Tienda
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/category/electronica">
                Electrónica
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/accesorios">
                Accesorios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/computadoras">
                Computadoras
              </Link>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};
