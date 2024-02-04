import React from 'react';
import Image from 'next/image';

export default function Login() {
    return (
        <div className="form-container ">
            <div className="flex justify-center items-center mt-10 p-10 max-w-auto ">
                <form className="flex flex-col items-center justify-center box-shadow p-6 border min-w-80 border-slate-300 shadow-md rounded-xl">
                    <h1 className="mt-0 text-center  font-semibold text-blue-500 text-xl">Login</h1>
                    <h1 className='text-xs mb-4 '>Don't have an account ? SignUp </h1>
                    <div className=" mb-4">
                        <h1 className='text-slate-500 text-xs py-1'>Email</h1>
                        <input
                            type="email"
                            autoFocus
                            className="border border-slate-500 h-10 w-72 rounded"
                            id="exampleInputEmail1"
                            // placeholder=" Enter Your Email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <h1 className='text-slate-500 text-xs py-1'>Password</h1>
                        <input
                            type="password"
                            className="border border-slate-500 px-0 h-10 w-72 rounded"
                            id="exampleInputPassword1"
                            // placeholder=" Enter Your Password"
                            required
                        />
                    </div>
                    {/* <div className="mb-4">
                        <button
                            type="button"
                            className="border hover:text-black hover:font-bold hover:border-black"
                            // onClick={() => { navigate("/forgot-password"); }}
                        >
                             Forgot Password 
                        </button>
                    </div> */}
                    <div className='px-0'>
                        <button type="submit" className="border rounded py-1 h-10 mt-2 bg-blue-500 text-white w-72">
                            Login
                        </button>
                    </div>
                    <h1 className='mt-4 mb-4'>or</h1>
                    <div className="flex items-center justify-center gap-4">
                        <div className='h-10 w-20 border border-slate-400 rounded'>
                            <Image
                                src="/images/icons8-google.svg"
                                alt="menu "
                                width={100}
                                height={100}
                                className="cursor-pointer"
                                quality={100}
                                style={{
                                    objectFit: 'contain',
                                    height: '100%',
                                    width: '100%',
                                  }}
                            />   
                        </div>
                        <div className='h-10 w-20 border border-slate-400 rounded'></div>
                        <div className='h-10 w-20 border border-slate-400 rounded'></div>
                    </div>
                </form>
            </div>
        </div>
    );
}
