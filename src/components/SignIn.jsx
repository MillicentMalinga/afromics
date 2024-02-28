import React from 'react'
import {useState }  from 'react'
import {Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
   console.log('Form Submitted')
    
    }

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
<input type="submit" value="Login" className='bg-blue-gray-600 uppercase font-body-plex font-semibold text-white rounded-lg self-center w-1/2 py-4'/>

{/* <p className='bg-green-600 px-4 py-2 text-green-800 font-body-plex font-semibold'>
 

</p> */}
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

export default SignUp