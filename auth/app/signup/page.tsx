import Link from "next/link"


export default function signup(){
    return <div>
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white w-[455] h-[491] rounded-2xl flex flex-col items-center">
                <div className="flex flex-row w-full max-w-[450] px-10 py-2 rounded-xl mt-8">
                    <div className="bg-cyan py-2 w-1/2 rounded-l-xl ">
                        <Link className="text-center flex justify-center items-center text-white" href="/signup">Sign Up</Link>
                    </div>
                    <div className="bg-slate-400 w-1/2 py-2 rounded-r-xl">
                        <Link className="flex justify-center items-center text-white" href="/">Login</Link>
                    </div>
                </div>
                <div className="text-[23px] mt-5 font-medium">Signup</div>
                <div className="">
                    <Link href="">Sign up with  Facebook</Link>
                </div>
                <div>
                    <Link href="">Signup with Google</Link>
                </div>
                <div>
                        <div><hr /></div>
                        <div>or</div>
                        <div><hr /></div>
                </div>
                <form action="">
                    <div>
                        <div>
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" />
                        </div>
                        <div>
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div>
                        <label htmlFor="password-confirm">Confirm password</label>
                        <input type="password" id="password" />
                    </div>
                    <div>
                        <button>Signup</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}