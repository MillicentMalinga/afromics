import React from 'react'
import {useState }  from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { signInWithEmailAndPassword } from '@firebase/auth'
import { UserAuth } from '../context/authContext'


function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    setError('')
    try {
      await signIn(email, password)


      navigate('/researchers')
    } catch (e) {
      setError(e.message)
    }finally {
      setIsLoading(false)
    }
  };
  return (
   <div className="bg-blue-gray-50 w-4/5 flex flex-col content-center justify-around h-screen m-auto">
 <Link to="/" className='font-body-plex text-blue-gray-700'> <FontAwesomeIcon icon={faArrowLeft} className='me-2' />   
        Back to Home 
         </Link>
   

    
    
 
    <div className="w-2/3 bg-white self-center shadow-lg ">
      <form action="" onSubmit={handleSubmit} className='bg-white rounded-md p-8 flex flex-col gap-6'>
 
     
        {/* Input for email */}
        <input type="email" value={email} placeholder='Email' 
         onChange={(e) => setEmail(e.target.value)} 
         className='font-body-plex font-light border-b-[1px] border-blue-gray-200' required/>


        {/* Input for password */}
        <input type="password" value={password} placeholder='Password' 
         onChange={(e) => setPassword(e.target.value)} 
         className='font-body-plex font-light border-b-[1px] border-blue-gray-200' required/>


        {/* Submit button */}
 <button type="submit" disabled={isLoading} className='text-white self-center border-blue-gray-900 border-[1px] font-body-plex bg-blue-gray-900 rounded-full w-1/2 py-2 px-4'>
        {isLoading ?  'Authenticating...' : 'LOGIN'}
      </button>{error &&
<p className='px-4 py-2 text-red-800 font-body-plex font-semibold'>
 
{error}
</p>}
      </form>

      <div className="flex flex-row justify-center gap-4 text-blue-gray-600">
      <FontAwesomeIcon icon={faGoogle} />
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faTwitter} />
      </div>
      <p className="text-blue-700 flex flex-row font-body-plex text-sm m-2 italic font-light gap-2 ">Don't Have an Account?
        <Link to="/register" className="text-blue-700 font-body-plex font-semibold">
         Register
      </Link>
      </p>
      </div>

   </div>
  )
}

export default SignIn