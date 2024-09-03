import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./Firebase";
import axios from "axios";

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
            setLoader(true)
            return signInWithPopup(auth,provider)

    }
    const logout = () => {
        setLoader(true)
        return signOut(auth)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currenuser => {
            setUser(currenuser)
            setLoader(false)
            console.log('user login here', currenuser)
            if(currenuser){
                const logeduser ={email : currenuser.email}
                axios.post('http://localhost:5001/jwt', logeduser, { withCredentials : true})
                .then(res => console.log("token response here",res.data))
            }
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