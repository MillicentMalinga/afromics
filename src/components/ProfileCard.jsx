import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import profileImage from "../assets/images/profile-happy.jpeg"
 
import React from "react";

 
function ProfileCard(props) {
  
  return (
    <Card className="w-full  md:flex-row sm:flex-col">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 md:w-2/5 sm:w-full shrink-0 rounded-r-none"
      >
        <img
src={profileImage}          alt="Profile Cat"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
      <Typography className="mb-2 font-body-plex text-xs font-normal">
          Hello, 
        </Typography>
        <Typography className="text-2xl font-logo mb-4">
          {props.userName}
        </Typography>
        
        <Typography color="gray" className="mb-8 font-body-plex italic text-xs font-normal">
       My name is Kimothy. The lady that built this site wanted her little boy to know she loves him and so she built this specific page with him in mind. 
       Her son loves cats, and I happen to be his favorite. Because there are no mice out there, I have been tasked with keeping you company here.
       My job is just to keep your profile in check as you work. 

      Love from Kimothy Kimantha, and LeeJoy. 
        </Typography>

        <button onClick={props.handleOpen} className="bg-blue-gray-800 text-white font-body-plex text-sm py-2 rounded-2xl px-4">Edit Profile</button>

      </CardBody>

    </Card>
  );
}

export default ProfileCard;