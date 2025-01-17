'use client'
import Link from "next/link"
// import PasswordstrengthChecker from "./passwordStrengthChecker"
import { useState } from "react"


export default function signup(){

    const [password, setPassword] = useState('')
    const [strength, setStrength] = useState({
        hasLength: false,
        hasUpper: false,
        hasLower: false,
        hasNumber: false,
        hasSpecialChar: false
    })

    // check password in change(whenever user types)

    const checkStrength = (newPassword)=>{
        setStrength({
            hasLength: newPassword.length > 8,
            hasUpper: /[A-Z]/.test(newPassword),
            hasLower: /[a-z]/.test(newPassword),
            hasNumber: /\d/.test(newPassword),
            hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword)
        })
    }

    const handlePasswordChange = (e) =>{
        const newPassword = e.target.value
        setPassword(newPassword)
        checkStrength(newPassword)
    }

    // jsx code here
    return <div>
        <div className="z-50 flex justify-center items-center h-screen">
            <div className="bg-white w-[550] min-h-[491] rounded-2xl flex flex-col items-center">
                <div className="flex flex-row w-full max-w-[450] px-10 py-2 rounded-xl mt-8">
                    <div className="bg-cyan py-2 w-1/2 rounded-l-xl ">
                        <Link className="text-center flex justify-center items-center text-white" href="/signup">Sign Up</Link>
                    </div>
                    <div className="bg-slate-400 w-1/2 py-2 rounded-r-xl">
                        <Link className="flex justify-center items-center text-white" href="/">Login</Link>
                    </div>
                </div>
                <div className="text-[22px] text-gray mt-4 font-medium">Signup</div>
                <div className="mt-5 border border-gray rounded-3xl px-[8rem] py-3 cursor-pointer shadow-lg">
                    <Link href="" className="text-gray text-sm">Sign up with  Facebook</Link>
                </div>
                <div className="mt-5 border border-gray rounded-3xl px-[8.7rem] py-3 cursor-pointer shadow-lg">
                    <Link href="" className="text-gray text-sm">Signup with Google</Link>
                </div>
                <div className="mt-5 flex flex-row justify-between items-center space-x-5">
                        <div>< hr className="w-[11rem] h-px bg-gray-300" /></div>
                        <div className="text-gray text-sm">or</div>
                        <div><hr className="w-[11rem] h-px bg-gray-300"  /></div>
                </div>
                <form action="" className="mt-5 flex flex-col space-y-3">
                    <div className="flex flex-row justify-between -space-x-12 items-center">
                        <div className="ml-14">
                            <label htmlFor="first-name" className="text-sm">First Name</label>
                            <input className="border border-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan focus:border-cyan px-1 py-2 rounded-xl text-center " type="text" id="first-name" placeholder="Enter your first name" />
                        </div>
                        <div>
                            <label className="text-sm" htmlFor="last-name">Last Name</label>
                            <input className="border border-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan focus:border-cyan px-1 py-2 rounded-xl text-center" type="text" id="last-name" placeholder="Enter your last name" />
                        </div>
                    </div>
                    <div className="flex flex-col w-[27.6rem] ml-14">
                        <label className="text-sm" htmlFor="email">Email</label>
                        <input className="border border-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan focus:border-cyan py-2 rounded-xl text-center" type="text" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="flex flex-row justify-center items-center gap-3">
                        <div className="ml-14">
                            <label className="text-sm" htmlFor="password">Password</label>
                            <input
                            className="border border-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan focus:border-cyan px-1 py-2 rounded-xl text-center"
                            type="password" 
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="Enter password"
                            />
                        </div>
                        <div>
                            <label className="text-sm" htmlFor="password-confirm">Confirm password</label>
                            <input
                            className="border border-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan focus:border-cyan px-1 py-2 rounded-xl text-center"
                             type="password" 
                             id="password" 
                             placeholder="Confirm password" />
                        </div>
                    </div>
                    <div className="ml-14 text-sm">
                        {
                            Object.entries(strength).map(([key,value]) =>(
                                <div key={key} className={`flex items-center ${value ? 'text-green-500' : 'text-red-500'}`}>
                                    {value ? '✓' : '✗'}
                                    <span className="text-sm">
                                        {key === 'hasLength' && 'At least 8 characters'}
                                        {key === 'hasUpper' && 'At least one uppercase letter'}
                                        {key === 'hasLower' && 'At least one lowercase letter'}
                                        {key === 'hasNumber' && 'At least one number'}
                                        {key === 'hasSpecialChar' && 'At least one special character'}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                    <div className="bg-cyan rounded-3xl cursor-pointer py-2">
                        <button>Signup</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}