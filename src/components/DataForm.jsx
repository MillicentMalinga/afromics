import React from 'react'
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import {db, storage} from '../firebaseConfig'
import {collection, addDoc} from 'firebase/firestore'
import {UserAuth} from '../context/authContext'
import {toast} from 'react-toastify'




function DataForm() {
    
  return (
    <div>DataForm</div>
  )
}

export default DataForm