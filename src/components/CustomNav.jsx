import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
 
function CustomNav() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/blog" className="flex items-center font-body-plex text-md text-blue-gray-900">
          Blog
        </a>
      </Typography>
      
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="about" className="flex items-center font-body-plex text-md text-blue-gray-900 ">
          About Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="contact" className="flex items-center font-body-plex text-md text-blue-gray-900 ">
         Contact Us
        </a>
      </Typography>
   
    </ul>
  );
 
  return (
    <div className="-m-6 p-5 overflow-hidden sticky">
      <Navbar className="sticky top-0 z-10 h-max max-w-full bg-inherit rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 font-logo lg:text-lg cursor-pointer py-1.5 font-medium"
          >
            Afromics
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Link to="/organisations">
              <Button
                
                size="sm"
                className="hidden lg:inline-block font-body-plex bg-blue-gray-500"
              >
                <span>Organisations</span>
              </Button>
              </Link>
              <Link to="/researchers">
              <Button
                
                size="sm"
                className="hidden lg:inline-block ml-5 bg-white text-blue-gray-800 font-body-plex border-blue-800"
              >
               <span>Researchers</span>
              </Button>
              </Link>
            </div>
            <IconButton
              
              className="ml-auto h-6 w-6 bg-blue-gray-50 text-black lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
               <FontAwesomeIcon icon={faXmark} />
              
              ) : (
                
<FontAwesomeIcon icon={faBars} />

              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Link to="/organisations">
            <Button fullWidth  size="sm" className="font-body-plex bg-blue-gray-500">
              <span>Organisations</span>
            </Button>
            </Link>
            <Link to="#researchers">
            <Button fullWidth size="sm" className="bg-white font-body-plex text-blue-gray-800">
              <span>Researchers</span>
            </Button>
            </Link>
          </div>
        </MobileNav>
      </Navbar>
    </div>
    );
}

export default CustomNav;