import React from 'react'

const ResturantLogin = () => {
  return (
    <>
      <h3>Login Component</h3>
      <div>
      <div className='sv_ip-wrap'>
          <input type="text" className='sv_ip-field' placeholder="Enter Your Email Id" />
        </div>
        <div className='sv_ip-wrap'>
          <input type="password" className='sv_ip-field' placeholder="Enter Your Password" />
        </div>
        <div className='sv_ip-wrap'>
            <button className="sv_btn">Login</button>
        </div>
      </div>
    </>
  )
}

export default ResturantLogin
