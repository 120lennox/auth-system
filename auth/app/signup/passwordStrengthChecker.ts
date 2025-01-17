import { useState } from "react"


const PasswordstrengthChecker = ()=>{
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
}

export default PasswordstrengthChecker;