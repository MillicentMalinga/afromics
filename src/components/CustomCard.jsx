import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,

  Typography,


} from "@material-tailwind/react";
function CustomCard(props) {
  return (
    <div>
         <Card className="mt-6 h-full mx-auto">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
        src={props.image}
          alt="Security"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="text-left mb-2 font-body-plex">
          {props.title}
        
        </Typography>
        <Typography className='font-body-plex text-left'>
          {props.description}
        </Typography>

      </CardBody>
     
    </Card>
    </div>
  )
}


export default CustomCard