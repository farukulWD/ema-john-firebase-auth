import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Login = () => {
  const [error,setError] =useState('')

  const navigate = useNavigate();
  const location = useLocation();
  


  const from = location.state?.from?.pathname ||"/";


  const {loginUser,}=useContext(AuthContext)

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email,password)
    .then(result=>{
      const loggedUser =result.user;
      
      form.reset()
      navigate(from,{replace:true})
    })
    .catch(error=>{
      setError(error.message);
    })
  };

  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-lato">Login now!</h1>
          </div>
          <div className="card p-3 flex-shrink-0 w-full shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning">Login</button>
              </div>
              <div className="my-2">
                <p>
                  New to Ema-john?{" "}
                  <Link className="text-warning" to="/signup">
                    Create New Account
                  </Link>
                </p>
              </div>
              <p>{error}</p>

              <fieldset className=" border-t-2 border-gray-600">
                <legend className="mx-auto px-4  text-2xl italic">OR</legend>
              </fieldset>
              <div className="mx-auto">
                <button className="btn btn-outline hover:bg-warning">
                  {" "}
                  Login with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
