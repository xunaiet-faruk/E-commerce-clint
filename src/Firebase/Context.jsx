import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./Firebase";

export const Authcontext = createContext(null)
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const Context = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const newuser =(email,password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singnusers =(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googlelogin = () =>{

            return signInWithPopup(auth,provider)

    }
    const logout = () => {
        setLoader(true)
        return signOut(auth)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currenuser => {
            setLoader(false)
            setUser(currenuser)
            console.log('user login here', currenuser)
        })
        return () => {
            unsubscribe();
        }


    }, [])

    const Authinfo = { user, loader, newuser, singnusers, googlelogin, logout }
    return (
        <Authcontext.Provider value={Authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Context;