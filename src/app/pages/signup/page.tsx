import React from 'react';

export default function SignUp() {
    return (
        <div className="form-container min-h-screen flex justify-center">
            <form className="box-shadow p-8 bg-white">
                <h4 className="title text-center mb-8 font-bold">SignUP FORM</h4>
                <div className="mb-4">
                    <input
                        type="text"
                        // value={name}
                        // onChange={(e) => setName(e.target.value)}
                        className="border-none border-b-2 border-black"
                        id="exampleInputEmail1"
                        placeholder="Enter Your Name"
                        required
                        autoFocus
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        className="border-none border-b-2 border-black"
                        id="exampleInputEmail1"
                        placeholder="Enter Your Email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        className="border-none border-b-2 border-black"
                        id="exampleInputPassword1"
                        placeholder="Enter Your Password"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        // value={phone}
                        // onChange={(e) => setPhone(e.target.value)}
                        className="border-none border-b-2 border-black"
                        id="exampleInputEmail1"
                        placeholder="Enter Your Phone"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        // value={address}
                        // onChange={(e) => setAddress(e.target.value)}
                        className="border-none border-b-2 border-black"
                        id="exampleInputEmail1"
                        placeholder="Enter Your Address"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        // value={answer}
                        // onChange={(e) => setAnswer(e.target.value)}
                        className="border-none border-b-2 border-black"
                        id="exampleInputEmail1"
                        placeholder="What is Your Favorite sports"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary border border-black bg-black text-white w-64">
                    SignUp
                </button>
            </form>
        </div>
    );
}
