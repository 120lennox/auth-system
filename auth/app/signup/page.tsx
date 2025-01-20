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
    return <div className="flex justify-center items-center h-screen text-sm">
        <div className="bg-white shadow-lg w-[552] mx-h-[838] rounded-2xl">
            <div className="flex flex-col space-y-5 py-5">
                <div className="text-[24px] font-medium text-center">Create an account</div>
                <form className="flex flex-col space-y-3 px-5" action="">
                    <div className="flex flex-col">
                        <label htmlFor="username">Username</label>
                        <input className="border border-slate-300 rounded-2xl py-2 text-center" type="text" id="username" placeholder="Enter username" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input className="border border-slate-300 rounded-2xl py-2 text-center" type="text" placeholder="Enter your email" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password">Password</label>
                        <input className="border border-slate-300 rounded-2xl py-2 text-center" type="password" placeholder="Enter your password" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input className="border border-slate-300 rounded-2xl py-2 text-center" type="password" placeholder="Confirm your password" />
                    </div>
                    <div></div>
                    <div></div>
                </form>
                <div></div>
            </div>
        </div>
    </div>
}