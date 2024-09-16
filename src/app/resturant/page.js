"use client";
import './style.css'
import { useState } from "react";
import ResturantLogin from "../_components/resturantLogin";
import ResturantSignup from "../_components/resturantSignup";
import Resturantheader from "../_components/Resturantheader";
import ResturantFooter from '../_components/ResturantFooter';

const Resturant = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div className="sv_container">
      <Resturantheader />
        <h1>Resturant Login/Signup Page</h1>
        {login ? <ResturantLogin /> : <ResturantSignup />}
        <div>
          <button
            className="sv_btn-link"
            onClick={() => {
              setLogin(!login);
            }}
          >
            {login
              ? "Dont Have Account? SignUp"
              : "Already Have Account? Login"}
          </button>
        </div>
      </div>
      <ResturantFooter />
    </>
  );
};
export default Resturant;
