import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { firebaseApp } from '../configs/firebase'
import { Navigate } from 'react-router-dom'
import DLayout from '../pages/dashboard/d-layout'

const AuthGuard = () => {
    const auth = getAuth(firebaseApp)
    const [account, setAccount] = useState<any>(null)
    console.log(auth.currentUser?.email)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAccount(user)
            } else {
                setAccount(null)
            }
        })
        return () => unsubscribe()
    }, [])

    if (account == null) {
        return <Navigate to='/login' />
    }
    return (
        <DLayout />
    )
}

export default AuthGuard