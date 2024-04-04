import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
 

function Footer() {
  return (
    <footer className="w-full bg-teal-50 mt-10 p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
<p className="font-logo font-bold">Afromics</p>        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Link
              to="/about-us"
              
              className="font-normal font-body-plex text-blue-gray-800 transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/opportunities"
              
              className="font-normal font-body-plex text-blue-gray-800 transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/organisations"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Organisations
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              color="blue-gray"
              className="font-normal font-body-plex  transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Link>
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