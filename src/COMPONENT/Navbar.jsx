import {  NavLink } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
    </nav>
  )
}

export default Navbar