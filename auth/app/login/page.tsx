'use client'
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"


export default function login(){
    const router = useRouter()

    const [email_username, setEmail_Username] = useState("")
    const [password, setPassword] = useState("")

    //error handling
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const validateEmail = (email:string) =>{
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    //handle submission

    const handleSubmission = async(e) =>{
        e.preventDefault()

        let isValid = true

        if (!email_username.trim()){
            setEmailError("Email/Username is required")
            isValid = false
        }

        if (!password.trim()){
            setPasswordError("Password is required")
            isValid = false
        }

        if (isValid){
            const userdata = {
                username: email_username,
                password: password
            }

            try{
                const response = await axios.post('http://127.0.0.1:8000/api-auth/login/', userdata)
                console.log(response.data)
                if (response.status === 201){
                    router.push('/')
                }
            }catch(error){
                console.log(error)
            }
        }
    }

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
                                onChange={(e)=>setEmail_Username(e.target.value)}
                                value={email_username}
                                id="email/username" 
                                placeholder="Enter your email or username" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password">Password</label>
                            <input 
                                className="border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan py-2 text-center rounded-2xl"
                                type="password"
                                onChange={(e)=>setPassword(e.target.value)}
                                value={password} 
                                id="password" 
                                placeholder="Enter your password" />
                        </div>
                        <div className="flex flex-row space-x-2">
                            <input type="checkbox" />
                            <label htmlFor="policy">By creating an account, I agree to our Terms of use and Privacy Policy </label>
                        </div>
                        <div className="bg-cyan py-1 rounded-2xl cursor-pointer flex justify-center items-center">
                            <button className="text-white text-center py-1">Login</button>
                        </div>
                    </form>
                    
                    <div className="flex flex-row justify-between items-center">
                        <div><hr className="h-px bg-slate-500 w-[200px]" /></div>
                        <div>or</div>
                        <div className="h-px bg-slate-500 w-[200px]" ><hr /></div>
                    </div>
                    <div className="bg-white border border-slate-400 py-2 rounded-2xl text-center">Continue with google</div>
                    <div className="flex flex-row space-x-2 justify-center items-center">
                        <p>Already have an account?</p>
                        <Link href="/signup">Signup</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
