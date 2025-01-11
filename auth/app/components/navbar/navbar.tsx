import Link from "next/link"

export default function NavBar(){
    return <div className="fixed top-0 bg-white w-full shadow-sm">
        <div className="mx-8 mt-5">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center space-x-5">
                    <div className="h-[40px] w-[40] bg-slate-300 rounded-full"></div>
                    <Link href="/">Home</Link>
                    <Link href="/">Web Designs</Link>
                    <Link href="/">Mobile Designs</Link>
                    <Link href="/">Illustration</Link>
                </div>

                <div className="flex flex-row justify-between items-center space-x-5">
                    <div className="">
                        <input className="border rounded-full text-center py-1 px-2" type="text" placeholder="search" />
                    </div>
                    <div>
                        <Link href="/login">Sign up</Link>
                    </div>
                    <div>
                        <Link href="/signup">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
}