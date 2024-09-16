import React from "react";

const ResturantSignup = () => {
  return (
    <>
      <h3>Signup Component</h3>
      <div>
        <div className="sv_ip-wrap">
          <input
            type="text"
            className="sv_ip-field"
            placeholder="Enter Your Email Id"
          />
        </div>
        <div className="sv_ip-wrap">
          <input
            type="password"
            className="sv_ip-field"
            placeholder="Enter Your Password"
          />
        </div>
        <div className="sv_ip-wrap">
          <input
            type="password"
            className="sv_ip-field"
            placeholder="Confirm Your Password"
          />
        </div>
        <div className="sv_ip-wrap">
          <input
            type="text"
            className="sv_ip-field"
            placeholder="Enter Your Resturant Name"
          />
        </div>
        <div className="sv_ip-wrap">
          <input
            type="text"
            className="sv_ip-field"
            placeholder="Enter Your City"
          />
        </div>
        <div className="sv_ip-wrap">
          <input
            type="text"
            className="sv_ip-field"
            placeholder="Enter Your Complete Address"
          />
        </div>
        <div className="sv_ip-wrap">
          <input
            type="text"
            className="sv_ip-field"
            placeholder="Enter Your Contact Number"
          />
        </div>
        <div className="sv_ip-wrap">
          <button className="sv_btn">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default ResturantSignup;
