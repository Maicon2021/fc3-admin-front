import React from "react";
import { InputFild } from "../register/InputFild";

export default function Login() {
    return (
        <form className=" flex w-full max-w-md flex-col space-y-4 rounded bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg">
            <div className=" flex flex-col items-center space-y-4">

                <h1 className=" text-3xl font-bold">Login</h1>

                <p className=" text-sm text-gray-500">
                    New to the app? {' '}
                    <a href="#" className=" text-red-500 hover:no-underline">
                        Register
                    </a>
                </p>                      
                        
            </div>

            <div className=" mt-8 flex flex-col space-y-4">

                <InputFild
                id="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
                />

                <InputFild
                id="password"
                label="Password"
                type="password"
                placeholder="Enter your Password"
                />

            </div>
            <div className=" flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                <button className=" flex w-full items-center justify-center rounded-lg bg-red-500 hover:bg-red-600 px-4 py-2 text-sm font-semibold text-white sm:w-auto sm:px-8">
                    Login
                </button>
            </div>                    
        </form>  
    );
}