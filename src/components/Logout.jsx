import React from 'react'
import {auth } from '../firebaseConfig'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'



function Logout() {
    const navigate = useNavigate()
    const logout = async() => {
        try{
          await auth.signOut();
          toast.success("Signed out successfully! Do come back soon!")
          navigate('/')
        }
        catch(error){
          toast.error("Error signing out")
        }
       }
  return (
    <button onClick={logout}>
    <FontAwesomeIcon  icon={faRightFromBracket} />
    Sign Out</button>
  )
}

export default Logout