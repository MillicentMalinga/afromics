import { createContext, useContext, useEffect, useState  } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "@firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const AuthContext = createContext();

export const AuthContextProvider =  ({ children }) => {
    const [user, setUser] = useState({});


    const SignUp = (email, password, firstName, lastName) => {
       return createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
         // Signed up 
         const user = userCredential.user;
         setDoc(doc(db, 'Users', user.uid), {
            id: user.uid,
            email: email,
            firstName: firstName,
            lastName: lastName,
         
        });

         // ...
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         // ..
       });
    }


    const signIn = (email, password) =>  {
        return signInWithEmailAndPassword(auth, email, password)
       }
    
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
        <AuthContext.Provider value={{SignUp, user, logout, signIn}} >
        {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}