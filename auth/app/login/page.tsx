import Link from "next/link"


export default function login(){
    return <div>
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white w-[455] h-[491] rounded-2xl flex flex-col items-center">
                <div className="flex flex-row bg-orange-700 w-[350] justify-between px-10 py-2 rounded-xl mt-8">
                    <div className="bg-white">
                        <Link href="/signup">Sign Up</Link>
                    </div>
                    <div>
                        <Link href="/">Login</Link>
                    </div>
                </div>
                <div>
                    <Link href="">Sign up with  Facebook</Link>
                </div>
                <div>
                    <Link href="Signup with Google"></Link>
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
                        <button>Signup</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}