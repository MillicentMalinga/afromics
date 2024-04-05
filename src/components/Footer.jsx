import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
 

function Footer() {
  return (
    <footer className="w-full bg-gray-50 mt-10 p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
           
          </li>
          <li>
          
          </li>
          <li>
         
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-logo text-blue-gray-900 font-bold">
        &copy; 2024 Afromics
      </Typography>
    </footer>
  );
}

export default Footer;