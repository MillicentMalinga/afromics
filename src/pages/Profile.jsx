import { toast } from 'react-toastify'
import { updateProfile } from "@firebase/auth";
import {updateDoc, doc} from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebaseConfig";
import React from 'react'
import ProfileCard from "../components/ProfileCard";
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";
import InputGroup from "../components/InputGroup";
import { UserAuth } from "../context/authContext";
import Footer from '../components/Footer';

function Profile() {
    const {user} = UserAuth();
    const [open, setOpen] = React.useState(false); 
    const handleOpen = () => setOpen(!open);
  
  
    const [formData, setFormData] = useState({
        displayName: user.displayName,
        firstName: user.displayName.split(" ")[0],
        lastName: user.displayName.split(" ")[1],
        email:  user.email,
    
    });
   



    const {firstName, lastName} = formData;
    const handleChange = (e) => { 
        setFormData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }
    
    // Your form remains the same
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           
            const data = {...formData};
         
            await updateProfile(user, {
                displayName: `${data.firstName} ${data.lastName}`
            
            }); 
            
           
            await updateDoc(doc(db, "users", user.uid), data);
            
            // setOpen(false);
            // toast.success("Profile updated successfully")

        } catch (error) {
            console.log(error.message)
            console.log(error.code)
            // toast.error("Error updating profile")
        }finally {
            toast.success("Profile updated successfully")
            setOpen(!open)
        }
    }    

   
  

   

   

  return (
    
    user &&   <div className="bg-white my-10 py-10 px-2 flex flex-col gap-10">
       
        <div className="profile  flex flex-col w-4/5 mx-auto">
            <ProfileCard userName={user.displayName} email={user.email} bio={formData.bio} 
            handleOpen={handleOpen}/>
            

        </div>


 
 
    <>
      
      <Dialog open={open} handler={handleOpen} className="bg-blue-gray-50 ">
        <DialogHeader className="font-body-plex text-sm font-bold">Edit Profile</DialogHeader>
        <DialogBody>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <InputGroup>
            <input type="text" className="w-full" name="firstName" id="firstName" value={firstName} onChange={handleChange}  />
            </InputGroup>
            <InputGroup>
            <input type="text" className="w-full" name="lastName" id="lastName" value={lastName} onChange={handleChange} />
            </InputGroup>
           
            
            <button type="submit" className="bg-blue-gray-800 text-white w-4/5 self-center font-body-plex text-sm py-2 rounded-2xl px-4">Update Profile</button>

        </form>
        </DialogBody>
        <DialogFooter>
          <Button
           
            onClick={handleOpen}
            className="mr-1 font-body-plex border-blue-gray-100 border-[1px]  bg-white text-blue-gray-700 text-sm uppercase rounded-full w-max py-2 px-4"
          >
            <span>Cancel</span>
          </Button>
         
        </DialogFooter>
      </Dialog>
    </>



<Footer />
    </div>
  

  )
}

export default Profile