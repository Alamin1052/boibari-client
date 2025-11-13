import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";
import { AuthContext } from "./AuthContext";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LogInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LogInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const updateUserProfile = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, { displayName, photoURL })
    }
    const LogOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            // console.log(currentUser)
            setLoading(false);
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        createUser,
        LogInUser,
        LogInWithGoogle,
        updateUserProfile,
        LogOutUser,
        user,
        loading
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};
export default AuthProvider;