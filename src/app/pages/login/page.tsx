import React from 'react';

export default function Login() {
    return (
        <div className="form-container min-h-screen">
            <div className="flex justify-center items-center mt-10 p-10 ">
                <form className="box-shadow p-8 bg-sky-200 rounded">
                    <h1 className="title text-center mb-4 font-bold font-serif">LOGIN FORM</h1>
                    <div className="mb-4">
                        <input
                            type="email"
                            autoFocus
                            className="border border-b-2 border-black"
                            id="exampleInputEmail1"
                            placeholder=" Enter Your Email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            className="border border-b-2 border-black"
                            id="exampleInputPassword1"
                            placeholder=" Enter Your Password"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <button
                            type="button"
                            className="border hover:text-black hover:font-bold hover:border-black"
                            // onClick={() => { navigate("/forgot-password"); }}
                        >
                             Forgot Password 
                        </button>
                    </div>

                    <button type="submit" className="border border-black bg-black text-white w-64">
                        LOGIN
                    </button>
                </form>
            </div>
        </div>
    );
}
