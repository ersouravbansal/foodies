import React from "react";
import Image from "next/image";
import logo from "../../images/foodiesLogo.png";
import Link from "next/link";
const Resturantheader = () => {
  return (
    <>
      <div className="sv_head-wrap">
        <div className="sv_logo">
          <Image style={{ width: 100, height: 100 }} src={logo} />
        </div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Login/SignUp</Link>
          </li>
          <li>
            <Link href="/">Profile</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Resturantheader;
