import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className="uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-left">
        <div className="uk-navbar-item uk-logo">
          <img
            className="uk-align-center"
            src="rental.png"
            alt=""
            width="80px"
            height="80px"
          />
        </div>
        <ul className="uk-navbar-nav">
          <li>
            {/* <a href="#">Clientes</a> */}
            <Link to="/customers">
              <span className="uk-margin-small-right" uk-icon="users"></span>
              <strong>Clientes</strong>
            </Link>
          </li>

          <li>
            <Link to="/movies">
              <span className="uk-margin-small-right" uk-icon="tv"></span>
              <strong>Filmes</strong>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
