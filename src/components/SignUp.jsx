import React from 'react'
import {useState }  from 'react'
import {Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { UserAuth } from '../context/authContext'
import { db } from '../firebaseConfig'
import { setDoc, doc } from 'firebase/firestore'


function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
const { SignUp } = UserAuth()
const [error, setError] = useState('')
const [isLoading, setIsLoading] = useState(false)
const [showPopup, setShowPopup] = useState(false)

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true); // Start loading
  try {
    const userCredential = await SignUp(email, password, firstName, lastName);
    // Signed up
    // Create a user profile in your 'Users' collection
    setShowPopup(true); // Show success popup
    navigate('/researchers');
    console.log(userCredential.user.uid);
     // Show success popup
  } catch (e) {
    setError(e.message); // Set error message
  } finally {
    setIsLoading(false); // End loading whether success or fail
  }
};


  return (
   <div className="bg-blue-gray-50 w-4/5 flex flex-col content-center justify-around h-screen m-auto">
 <Link to="/" className='font-body-plex text-blue-gray-500'> <FontAwesomeIcon icon={faArrowLeft} className='me-2' />   
        Back to Home 
         </Link>
   
    <div className="w-2/3 bg-white self-center ">
      <form action="" onSubmit={handleSubmit} className='bg-white rounded-md p-8  flex flex-col gap-6'>
      

        {/* input for first name complete with useState hook */}
        <input type="text" value={firstName} placeholder='First Name' 
         onChange={(e) => setFirstName(e.target.value)}
         className='font-body-plex font-light border-b-[1px] w-1/3 border-blue-gray-200 focus:border-blue-gray-200' required/>

         {/* Input for last name */}
         <input type="text" value={lastName} placeholder='Last Name' 
         onChange={(e) => setLastName(e.target.value)} 
         className='font-body-plex font-light border-b-[1px] w-1/2 border-blue-gray-200' required/>
     
        {/* Input for email */}
        <input type="email" value={email} placeholder='Email' 
         onChange={(e) => setEmail(e.target.value)} 
         className='font-body-plex font-light border-b-[1px] w-2/3 border-blue-gray-200' required/>

   

        {/* Input for password */}
        <input type="password" value={password} placeholder='Password' 
         onChange={(e) => setPassword(e.target.value)} 
         className='font-body-plex font-light border-b-[1px] w-11/12 border-blue-gray-200' required/>

        {/* Input for confirm password */}
        <input type="password" value={confirmPassword} placeholder='Confirm Password' 
         onChange={(e) => setConfirmPassword(e.target.value)
          
        }
        
         className='font-body-plex font-light border-b-[1px] border-blue-gray-200' required/>

        {/* Submit button */}
        <button type="submit" disabled={isLoading} className='text-white self-center border-blue-gray-900 border-[1px] font-body-plex bg-blue-gray-900 rounded-full w-max py-2 px-4'>
        {isLoading ?  'Creating Account...' : 'Create Account'}
      </button>
      {showPopup && (
        <div className='bg-green-200 text-green-800 font-body-plex px-4 py-2'>

          Account Created Successfully! Navigating to home page...
         
        </div>
      )}
      {error && <div style={{color: 'red'}}>{error}</div>}

      </form>

      <p className="text-blue-700 flex flex-row font-body-plex text-sm m-2 italic font-light gap-2 ">Already Have An Account? 
        <Link to="/login" className="text-blue-700 font-body-plex font-semibold">
         Login
      </Link>
      </p>
      </div>

   </div>
  )
}

export default SignUp