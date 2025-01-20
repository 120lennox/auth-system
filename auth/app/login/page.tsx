export default function login(){
    return <div>
        <div className="flex justify-center items-center h-screen text-sm mt-10 duration-300 ease-in-out">
            <div className="bg-white text-slate-800 shadow-lg w-[552] mx-h-[838] rounded-2xl">
                <div className="flex flex-col mx-5 space-y-5 py-5">
                    <div className="text-center text-[24px] ">Login</div>
                    <form action="">
                        <div>
                            <label htmlFor="email/username">Email or Username</label>
                            <input type="text" id="email/username" placeholder="Enter your email ot username" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="text" id="password" placeholder="Enter your password" />
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label htmlFor="policy">By creating an account, I agree to our Terms of use and Privacy Policy </label>
                        </div>
                        <div>
                            <button>Login</button>
                        </div>
                    </form>
                    
                    <div>
                        <div><hr /></div>
                        <div>or</div>
                        <div><hr /></div>
                    </div>
                    <div>continue with google</div>
                    <div>
                        <p>Already have an account?</p>
                        <button>Signup</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
