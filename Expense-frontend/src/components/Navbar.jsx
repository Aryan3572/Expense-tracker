import { useState, useContext } from "react";
// import AuthButtons from "./AuthButtons";
import {AuthContext} from "../context/AuthContext";

function Navbar() {

  const [active, setActive] = useState("Home");
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const navItems = ["Home","About","Profile","Settings","Contact"];

  return (
    <nav className="navbar">

      <div className="logo">ExpenseTracker</div>

      <ul className="nav-links">

        {navItems.map((item) => (

          <li
            key={item}
            className={active === item ? "active" : ""}
            onClick={() => setActive(item)}
          >
            {item}
          </li>

        ))}

      </ul>

            {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </nav>
  );
}

export default Navbar;