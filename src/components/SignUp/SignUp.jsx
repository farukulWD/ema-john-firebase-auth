import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const SignUp = () => {

  const [error, setError]=useState('')

  const {createUser,googleLogin}= useContext(AuthContext)

    const handleSignUp=event=>{

      setError('');
      event.preventDefault();

      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      const confirmPassword = form.confirmPassword.value;

      if (password !== confirmPassword) {
        setError("Did not match")
        return;
      }
      else if(password.length < 6){
        setError("Password must be six character");
        return;
      }

      createUser(email,password)
      .then(result=>{
        const loggedUser= result.user;
      })
      .catch(error=>{
        setError(error.message)
      })
      form.reset()

      // console.log(email, password, confirmPassword);
    }

    const handleGoogleLogin=()=>{
      googleLogin()
      .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error=>{
        setError(error.message);
      })
    }

    return (
        <div className=''>
      <div className="hero ">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-lato">Sign up now!</h1>
          </div>
          <div className="card p-3 flex-shrink-0 w-full md:w-96  shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
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
                <input type="password" name="password" placeholder="password" className="input input-bordered" required
                />
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" name="confirmPassword" placeholder="password" className="input input-bordered" required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning">Sign Up</button>
              </div>
              <div className="my-2">
                <p>
                  Already Have an account?
                  <Link className="text-warning" to="/login">
                    Login
                  </Link>
                </p>
              </div>
              <p className='text-error'>{error}</p>

              <fieldset className=" border-t-2 border-gray-600">
                <legend className="mx-auto px-4  text-2xl italic">
                  OR
                </legend>
              </fieldset>
              <div className="mx-auto">
                <button onClick={handleGoogleLogin} className="btn btn-outline hover:bg-warning"> Login with Google</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignUp;