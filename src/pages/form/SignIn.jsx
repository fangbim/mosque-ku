import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "../../components/input/CustomInput";
import Navbar from "../../components/navbar/Navbar";
import Social from "../../components/Social";

function SignIn() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="w-[480px] h-[670] bg-[#EEF2E6] grid justify-center rounded-lg">
          <div className="flex justify-center pt-10 pb-2">
            <img
              className="w-[150px]"
              src="./images/logo-mosqueku.png"
              alt="logo-mosqueku"
            />
          </div>
          <p className="font-montserrat font-extrabold text-[24px] text-center">
            Welcome Back
          </p>
          <p className="font-montserrat text-[16px] font-normal text-center">
            Please enter your details.
          </p>
          <form class="w-full max-w-sm pt-7">
            <CustomInput label='Email' type='email'/>
            <CustomInput label='Password' type='password'/>
          </form>
          <p className="text-right cursor-pointer font-montserrat font-light text-[12px] pb-2">Forgot Password?</p>
          <button className="w-full bg-[#3D8361] py-3 px-5 text-white rounded-xl font-montserrat font-bold text-[16px] hover:bg-[#1C6758]">Sign in</button>
          <div
            class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p class="text-center font-semibold mx-4 mb-0">OR</p>
          </div>
          <div className="w-full flex justify-evenly items-center">
            <Social src='./images/google.png'  title='Sign up with Google'/>
            <Social src='./images/facebook.png' title='Sign up with Facebook'/>
          </div>

          <div className="flex items-center text-center justify-center pt-5 pb-10">
            <p className="font-montserrat font-medium text-[12px]">Don't have an account? </p>
            <Link to='/signup'><p className="font-montserrat font-bold text-[12px] cursor-pointer"> Sign Up</p></Link>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
