import React from 'react';

export default function SignUp() {
    return (
        <div className="form-container flex justify-center mt-10 p-10 max-w-auto">
            <form className="flex flex-col items-center justify-center box-shadow p-6 border min-w-80 border-slate-300 shadow-md rounded-xl">
            <h1 className="mt-0 text-center mb-1 font-semibold text-blue-500 text-xl">Signup</h1>
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
                <div className="mb-4">
                    <h1 className='text-slate-500 text-xs py-1'>What is Your Favorite sports</h1>
                    <input
                        type="text"
                        // value={answer}
                        // onChange={(e) => setAnswer(e.target.value)}
                        className="border border-slate-500 px-0 h-10 w-72 rounded"
                        id="exampleInputEmail1"
                        // placeholder="What is Your Favorite sports"
                        required
                    />
                </div>
                <button type="submit" className="border rounded py-1 h-10 mt-2 bg-blue-500 text-white w-72">
                            Signup
                </button>
            </form>
        </div>
    );
}
