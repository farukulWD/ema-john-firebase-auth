import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {
  const { logout, user } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
    .then(result=>{
    })
    .then(error=>console.error(error))
  };

  console.log(user);

  return (

    <div>
      <div className="navbar bg-[#1C2B35] px-2 md:px-10 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#1C2B35] rounded-box w-52"
            >
              <li >
                <Link className="hover:bg-orange-400" to="/">Shop</Link>{" "}
              </li>
              <li>
                <Link to="/orders">Orders</Link>{" "}
              </li>
              <li>
                <Link to="/inventory">Inventory</Link>{" "}
              </li>
              <li>
              <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">SignUp</Link>{" "}
              </li>
            </ul>
          </div>
          <img src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="hover:bg-orange-400 hover:text-white rounded">
              <Link to="/">Shop</Link>{" "}
            </li>
            <li className="hover:bg-orange-400 hover:text-white rounded">
              <Link to="/orders">Orders</Link>{" "}
            </li>
            <li className="hover:bg-orange-400 hover:text-white rounded">
              <Link to="/inventory">Inventory</Link>{" "}
            </li>
            <li className="hover:bg-orange-400 hover:text-white rounded">
              <Link to="/login">Login</Link>
              </li>
            <li className="hover:bg-orange-400 hover:text-white rounded">
              <Link to="/signup">SignUp</Link>{" "}
            </li>
          </ul>
        </div>
        <div className="navbar-end">
             {user && <p className="flex items-center gap-2"> <img className="w-7 h-7 rounded-full" src={user.photoURL} alt="" />
                 <Link className=' text-white ml-3' onClick={handleLogout}>log out</Link>
            </p>}
        </div>
      </div>
    </div>
  );
};

export default Header;
