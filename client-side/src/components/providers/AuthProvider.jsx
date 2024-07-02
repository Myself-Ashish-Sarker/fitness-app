import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../firebse/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // creating a user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // creating a user

    // user sign in
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // user sign in

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // checking if the user is currently logged in or not
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('Current User: ', currentUser);
            setLoading(false)
        });
        return () => {
            return unsubscribe();
        }
    }, [])
    // checking if the user is currently logged in or not

    // setting everything in context to make it availiable for other components 
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }
    // setting everything in context to make it availiable for other components 
    
    return (
        // passing context withing a value={}
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        // passing context withing a value={}
    );
};

export default AuthProvider;