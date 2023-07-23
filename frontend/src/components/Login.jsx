import React from 'react'
import GoogleLogin from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'

const Login = () => {
  const responseGoogle = res => {
    console.log(res)
  }

  return (
    <div className="flex justify-start items-center flex-col h-screen">
        <div className="relative w-full h-full">
          <video
            src={shareVideo}
            type="video/mp4"
            loop
            controls={false}
            muted
            autoPlay
            className="w-full h-full object-cover"
          />

          <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
            <div className="p-5 border rounded-lg">
              <img src={logo} width="130px" alt="logo" />
              <hr className="my-5"/>
              <div className="shadow-2xl">
                <GoogleLogin
                  /** Doesn't Work */
                  /** @TODO Fix Google Login */
                  clientId={process.env.GOOGLE_API_TOKEN}
                  render={(renderProps) => (
                    <button
                      type="button"
                      className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      <FcGoogle className="mr-4" /> Sign in with Google
                    </button>
                  )}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy="single_host_origin"
                  />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login
