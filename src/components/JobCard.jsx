
  import { Link } from "react-router-dom";

  import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import CardBg from '../assets/images/cardbackground.jpeg'
function JobCard(props) {
    return (
      <div className="flex  font-body-plex text-blue-gray-800 flex-col divide-y divide-blue-gray-200 gap-8 w-4/5 p-4 bg-white mx-auto  rounded-lg shadow-lg">
        
        <div className="flex flex-col ">
          <p className="font-bold">
            {props.title}
          </p>
          <p className="text-sm">
            {props.short_description}
            </p>

        </div>

        <div className="flex flex-col gap-2">
          <p className="font-normal">
            {props.long_description}
          </p>
          <p className="font-bold text-xs">
            {props.deadline}
          </p>
     <button className="bg-blue-gray-500 text-white font-semibold uppercase place-self-end w-max px-4 py-2 rounded-full shadow-lg">
        <Link to={`/jobs/${props.id}`}>Apply</Link>
     </button>
        </div>
    
      </div>
    );
  }

export default JobCard;