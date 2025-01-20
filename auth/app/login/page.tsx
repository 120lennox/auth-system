export default function login(){
    return <div>
        <div className="flex justify-center items-center h-screen text-sm mt-10 duration-300 ease-in-out">
            <div className="bg-white text-slate-800 shadow-lg w-[552] mx-h-[838] rounded-2xl">
                <div className="flex flex-col mx-5 space-y-5 py-5">
                    <div className="text-center text-[24px] font-medium">Login</div>
                    <form className="flex flex-col space-y-5" action="">
                        <div className="flex flex-col">
                            <label className="" htmlFor="email/username">Email or Username</label>
                            <input
                                className="border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan py-2 text-center rounded-2xl"
                                type="text" 
                                id="email/username" 
                                placeholder="Enter your email ot username" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password">Password</label>
                            <input 
                                className="border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan py-2 text-center rounded-2xl"
                                type="text" id="password" placeholder="Enter your password" />
                        </div>
                        <div className="flex flex-row space-x-2">
                            <input type="checkbox" />
                            <label htmlFor="policy">By creating an account, I agree to our Terms of use and Privacy Policy </label>
                        </div>
                        <div className="bg-cyan py-1 rounded-2xl cursor-pointer flex justify-center items-center">
                            <button className="text-white text-center py-1">Login</button>
                        </div>
                    </form>
                    
                    <div className="flex flex-row">
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
