import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import InputGroup from "../components/InputGroup";
import SignInImage from "../assets/images/signin.svg";
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth, db} from "../firebaseConfig";
import {setDoc, doc, serverTimestamp} from "firebase/firestore";
import { toast } from "react-toastify";




function SignUp() {
    const navigate = useNavigate();
    const [passwordShown, setPasswordShown] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "", 
        dateJoined: serverTimestamp()

    });

    const {firstName, lastName, email, password} = formData;
    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        updateProfile(user, {
            displayName: `${firstName} ${lastName}`
        });
        const data = {...formData};
        delete data.password;
       await setDoc(doc(db, "users", user.uid), data);
        toast.success("Account created successfully")
        navigate('/researchers')

        }catch (error) {
            toast.error("Error creating account")
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
                    Welcome to <span className="text-blue-gray-600 font-logo">Afromics</span>
                </p>
                <form action="" className="flex my-6 flex-col content-center gap-4" onSubmit={handleSubmit}>
                    <InputGroup>
                        <input type="text" id="firstName" placeholder="What is your first name?" className="w-full bg-transparent focus:outline-none" value={firstName} onChange={handleChange} />

                    </InputGroup>
                    <InputGroup>
                        <input type="text" id="lastName" placeholder="What is your last name?" className="w-full bg-transparent focus:outline-none" value={lastName} onChange={handleChange} />
                    </InputGroup>

                    <InputGroup>
                        <input type="email" id="email" placeholder="Your email address" className="w-full bg-transparent focus:outline-none" value={email} onChange={handleChange} />
                    </InputGroup>
                   
                    <InputGroup>
                        <input type={passwordShown ? "text" : "password"} id="password" placeholder="Password" value={password} className="w-full bg-transparent focus:outline-none" onChange={handleChange} />
                        <FontAwesomeIcon icon={passwordShown ? faEyeSlash : faEye} className="text-blue-gray-700" onClick={() => setPasswordShown(!passwordShown)} />
                    </InputGroup>
                  
                    <button type="submit" className="w-4/5 mx-auto bg-blue-gray-800 text-white font-body-plex text-sm py-2 rounded-2xl">Sign Up</button>
                </form>
                
                <p className="text-xs italic font-body-plex text-right mr-10 text-blue-gray-700">
                    Already have an account? <Link to="/login" className="text-blue-700 font-bold">Sign In</Link>
                </p>

            </div>
        </div>

      </div>
    )
    
}


export default SignUp;