import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className="uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className="uk-active">
            {/* <a href="#">Clientes</a> */}
            <Link to="/clientes">Clientes</Link>
          </li>

          <li>
            <Link to="/filmes">Filmes</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
