import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "../../components/input/CustomInput";
import Navbar from "../../components/navbar/Navbar";
import Social from "../../components/Social";

function SignUp() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="w-[480px] h-[670] bg-[#EEF2E6] grid justify-center rounded-lg">
          <div className="flex justify-center pt-5 pb-2">
            <img
              className="w-[75px]"
              src="./images/logo-mosqueku.png"
              alt="logo-mosqueku"
            />
          </div>
          <p className="font-montserrat font-extrabold text-[24px] text-center">
            Create your account
          </p>
          <p className="font-montserrat text-[16px] font-normal text-center">
            Enter the fields below to get started.
          </p>
          <form class="w-full max-w-sm pt-7 pb-3">
            <CustomInput label='Name' type='text'/>
            <CustomInput label='Email' type='email'/>
            <CustomInput label='Address' type='text'/>
            <CustomInput label='Phone Number' type='text'/>
            <CustomInput label='Password' type='password'/>
          </form>
          <button className="w-full bg-[#3D8361] py-3 px-5 text-white rounded-xl font-montserrat font-bold text-[16px] hover:bg-[#1C6758]">Sign up</button>
          <div
            class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p class="text-center font-semibold mx-4 mb-0">OR</p>
          </div>
          <div className="w-full flex justify-evenly items-center">
            <Social src='./images/google.png'  title='Sign up with Google'/>
            <Social src='./images/facebook.png' title='Sign up with Facebook'/>
          </div>

          <div className="flex items-center text-center justify-center pt-5 pb-8">
            <p className="font-montserrat font-medium text-[12px]">Already have an account? </p>
            <Link to='/signin'><p className="font-montserrat font-bold text-[12px] cursor-pointer"> Sign In</p></Link>
            
          </div>

        </div>
      </div>
    </>
  );
}

export default SignUp;
