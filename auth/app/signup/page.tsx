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
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white w-[555] min-h-[491] rounded-2xl flex flex-col items-center">
                <div className="flex flex-row w-full max-w-[450] px-10 py-2 rounded-xl mt-8">
                    <div className="bg-cyan py-2 w-1/2 rounded-l-xl ">
                        <Link className="text-center flex justify-center items-center text-white" href="/signup">Sign Up</Link>
                    </div>
                    <div className="bg-slate-400 w-1/2 py-2 rounded-r-xl">
                        <Link className="flex justify-center items-center text-white" href="/">Login</Link>
                    </div>
                </div>
                <div className="text-[22px] text-gray mt-5 font-medium">Signup</div>
                <div className="mt-5 border border-gray rounded-2xl px-14 py-2 cursor-pointer">
                    <Link href="" className="text-gray text-sm">Sign up with  Facebook</Link>
                </div>
                <div className="mt-5 border border-gray rounded-2xl px-16 py-2 cursor-pointer">
                    <Link href="" className="text-gray text-sm">Signup with Google</Link>
                </div>
                <div className="mt-5 flex flex-row justify-between items-center space-x-5">
                        <div>< hr className="w-20 h-px bg-gray-300" /></div>
                        <div>or</div>
                        <div><hr className="w-20 h-px bg-gray-300"  /></div>
                </div>
                <form action="" className="mt-5 flex flex-col space-y-5">
                    <div className="flex flex-row justify-center items-center">
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
                        <input
                         type="password" 
                         id="password"
                         value={password}
                         onChange={handlePasswordChange}
                         placeholder="Enter password"
                         />
                    </div>
                    <div>
                        <label htmlFor="password-confirm">Confirm password</label>
                        <input type="password" id="password" placeholder="Confirm password" />
                    </div>
                    <div>
                        {
                            Object.entries(strength).map(([key,value]) =>(
                                <div key={key} className={`flex items-center ${value ? 'text-green-500' : 'text-red-500'}`}>
                                    {value ? '✓' : '✗'}
                                    <span>
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
                    <div>
                        <button>Signup</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}