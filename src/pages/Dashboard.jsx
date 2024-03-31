import React from 'react'
import {getAuth} from 'firebase/auth'
import { useState, useEffect } from 'react'


function Dashboard() {
    const auth = getAuth();
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(auth.currentUser.displayName);
    },[auth.currentUser])
    
  return (
    <div>
        <h1>Welcome back, {user}</h1>
    </div>
  )
}

export default Dashboard