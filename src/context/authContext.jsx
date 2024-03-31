import { createContext, useContext, useEffect, useState  } from "react";
import { auth } from "../firebaseConfig";
import {  signOut, onAuthStateChanged } from "@firebase/auth";


const AuthContext = createContext();

export const AuthContextProvider =  ({ children }) => {
    const [user, setUser] = useState(null);



  
    
      const logout = () => {
          return signOut(auth)
      }

      // get User data

      
    
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log(currentUser);
          setUser(currentUser);
        });
        return () => {
          unsubscribe();
        };
      }, []);
    return (
        <AuthContext.Provider value={{user, logout}} >
        {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}