import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/students"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Students
        </NavLink>
      </ul>
    </nav>
  );
}
