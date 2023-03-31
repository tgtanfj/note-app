import React, { createContext, useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const auth = getAuth()

    const navigate = useNavigate()

    useEffect(() => {
        const unsubcribed = auth.onIdTokenChanged((user) => {
            if (user?.uid) {
                setUser(user)
                localStorage.setItem('accessToken', user.accessToken)
                return
            }

            //reset user info
            setUser({})
            localStorage.clear()
            navigate('/login')
        })

        return () => {
            unsubcribed()
        }
    }, [auth])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}
