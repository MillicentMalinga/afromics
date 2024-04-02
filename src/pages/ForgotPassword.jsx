import { useState } from "react";
import { Link} from "react-router-dom";

import InputGroup from "../components/InputGroup";
import SignInImage from "../assets/images/signin.svg";
import {auth } from "../firebaseConfig";
import {sendPasswordResetEmail} from "firebase/auth";
import { toast } from "react-toastify";


function ForgotPassword() {

    const [email, setEmail] = useState();

  
    const handleChange = (e) => {
        setEmail(e.target.value)
          
        }
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await sendPasswordResetEmail(auth, email);
        toast.success("Password reset link sent to your email")
        
        }catch (error) {
            toast.error("Error sending password reset link")
        }


    }

    return(
      <div className="bg-blue-gray-50 h-[100vh] overflow-hidden">
        <div className="flex lg:flex-row sm:flex-col">
            <div className="lg:w-1/3 sm:w-1/6 sm:self-center sm:bg-inherit rounded-tr-2xl lg:h-[100vh] lg:bg-blue-gray-800">
                <p className="font-logo text-sm text-white m-4">
                    Afromics
                </p>
                <img src={SignInImage} alt="signInImage" />
            </div>

            <div className="flex-col flex lg:w-1/2 sm:w-4/5 h-4/5 m-auto">
                <p className="text-xs font-body-plex text-center font-bold italic text-blue-gray-700">
                    Let's reset your password
                </p>
                <form action="" className="flex my-6 flex-col content-center gap-4" onSubmit={handleSubmit}>
                    <InputGroup>
                        <input type="email" id="email" placeholder="Email" className="w-full bg-transparent focus:outline-none" value={email} onChange={handleChange} />
                    </InputGroup>
                    
                    <button type="submit" className="w-4/5 mx-auto bg-blue-gray-800 text-white font-body-plex text-sm py-2 rounded-2xl">Sign In</button>
                </form>
                <p className="text-xs italic font-body-plex text-right mr-10 text-blue-gray-700">
                    Remembered password? <Link to="/login" className="text-blue-700 font-bold">Sign In</Link>
                </p>
                <p className="text-xs italic font-body-plex text-right mr-10 text-blue-gray-700">
                    Don't have an account? <Link to="/register" className="text-blue-700 font-bold">Sign Up</Link>
                </p>

            </div>
        </div>

      </div>
    )
    
}


export default ForgotPassword;