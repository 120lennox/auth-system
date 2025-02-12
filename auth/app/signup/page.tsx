'use client'
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function signup() {
    const router = useRouter()

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState("")
    const [strength, setStrength] = useState({
        hasLength: false,
        hasUpper: false,
        hasLower: false,
        hasNumber: false,
        hasSpecialChar: false
    })

    //error handling
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const validateEmail = (email:string) =>{
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    const checkStrength = (newPassword: string) => {
        setStrength({
            hasLength: newPassword.length > 8,
            hasUpper: /[A-Z]/.test(newPassword),
            hasLower: /[a-z]/.test(newPassword),
            hasNumber: /\d/.test(newPassword),
            hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword)
        })
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value
        setPassword(newPassword)
        checkStrength(newPassword)
    }
// 120@testUser
    const handleSubmit = async(e)=>{
        e.preventDefault()


        let isValid = true

        if (!username.trim()){
            setUsernameError('username required')
            isValid = false
        }

        if (!email.trim()){
            setEmailError('email required')
            isValid = false
        }

        if (!password.trim()){
            setPasswordError('password required')
            isValid = false
        }

        if (!(password === confirmPassword)){
            setConfirmPasswordError('passwords do not match')
            isValid = false
        }

        if (isValid){
            const userdata = {  
                username: username,
                email: email, 
                password1: password, 
                password2: confirmPassword}

            try{
                const response = await axios.post(
                    "http://127.0.0.1:8000/api/dj-rest-auth/registration/", 
                    userdata
                )
                
                if (response.status === 201){
                    router.push('/login')
                }
            }catch(error){
                console.log(error.response?.data || error)
            }
        }
    }


    return (
        <div className="flex justify-center items-center h-screen text-sm mt-10 duration-300 ease-in-out">
            <div className="bg-white text-slate-800 shadow-lg w-[552] mx-h-[838] rounded-2xl">
                <div className="flex flex-col space-y-5 py-5">
                    <div className="text-[24px] font-medium text-center">Create an account</div>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-3 px-5" action="">
                        <div className="flex flex-col">
                            <label htmlFor="username">Username</label>
                            <input
                                className="border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan rounded-2xl py-2 text-center "
                                type="text"
                                id="username"
                                onChange={(e)=>setUsername(e.target.value)}
                                value={username}
                                placeholder="e.g john doe" />
                            {
                                usernameError && <p className="text-red-500 text-sm">{usernameError}</p>
                            }
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input
                                className="border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan rounded-2xl py-2 text-center" 
                                type="text"
                                onChange={(e) =>setEmail(e.target.value)}
                                value={email}
                                placeholder="e.g john.doe@example.com"
                                
                                />
                            {
                                emailError && <p className="text-red-500 text-sm">{emailError}</p>
                            }
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password">Password</label>
                            <input
                                className="border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan rounded-2xl py-2 text-center"
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder="Enter your password" />
                            
                            {
                                passwordError && <p className="text-red-500 text-sm">{passwordError}</p>
                            }
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                className="border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan rounded-2xl py-2 text-center"
                                type="password"
                                onChange={(e)=>setConfirmPassword(e.target.value)}
                                value={confirmPassword}
                                placeholder="Confirm your password" />
                            
                            {
                                confirmPasswordError && <p className="text-red-500 text-sm">{confirmPasswordError}</p>
                            }
                        </div>
                        {/* <div className="">
                            {
                                Object.entries(strength).map(([key, value]) => (
                                    <div key={key} className={`flex ${value ? 'text-green-500' : 'text-red-500'}`}>
                                        {value ? '✓' : '✗'}
                                        <div className="flex flex-row">
                                        
                                            <div>
                                                {key === 'hasLength' && 'At least 8 characters'}
                                                {key === 'hasUpper' && 'At least one uppercase letter'}
                                                {key === 'hasLower' && 'At least one lowercase letter'}
                                            </div>
                                            <div>
                                                {key === 'hasNumber' && 'At least one number'}
                                                {key === 'hasSpecialChar' && 'At least one special character'}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div> */}
                        <div className="">
                            {/* Validation Status Container */}
                            <div className="flex gap-x-8">
                                {/* Left Column */}
                                <div className="flex flex-col gap-y-2">
                                    <div className={`flex items-center gap-x-2 ${strength.hasLength ? 'text-green-500' : 'text-red-500'}`}>
                                        {strength.hasLength ? '✓' : '✗'}
                                        <span>At least 8 characters</span>
                                    </div>
                                    <div className={`flex items-center gap-x-2 ${strength.hasUpper ? 'text-green-500' : 'text-red-500'}`}>
                                        {strength.hasUpper ? '✓' : '✗'}
                                        <span>At least one uppercase letter</span>
                                    </div>
                                    <div className={`flex items-center gap-x-2 ${strength.hasLower ? 'text-green-500' : 'text-red-500'}`}>
                                        {strength.hasLower ? '✓' : '✗'}
                                        <span>At least one lowercase letter</span>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="flex flex-col gap-y-2">
                                    <div className={`flex items-center gap-x-2 ${strength.hasNumber ? 'text-green-500' : 'text-red-500'}`}>
                                        {strength.hasNumber ? '✓' : '✗'}
                                        <span>At least one number</span>
                                    </div>
                                    <div className={`flex items-center gap-x-2 ${strength.hasSpecialChar ? 'text-green-500' : 'text-red-500'}`}>
                                        {strength.hasSpecialChar ? '✓' : '✗'}
                                        <span>At least one special character</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-cyan rounded-2xl py-1 cursor-pointer flex justify-center items-center hover:bg-cyan-500">
                            <button type="submit" className="py-1 text-white font-medium">Sign in</button>
                        </div>
                    </form>
                    <div className="text-center text-xs text-slate-600">
                        By creating an account, you agree to the Terms of use and Privacy Policy. 
                    </div>
                </div>
            </div>
        </div>
    )
}
