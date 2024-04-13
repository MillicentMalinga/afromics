import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton
} from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
 
function CustomNav(props) {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
 

  const getPath = (path) => {
    if (path === location.pathname) {
      return true;
    }
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
     
    
    
   
    </ul>
  );
 
  return (
    <div className="-m-6 p-5 overflow-hidden sticky">
      <Navbar className="sticky top-0 z-10 h-max max-w-full bg-inherit rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
           
            className="mr-4 font-logo lg:text-lg cursor-pointer py-1.5 font-medium"
            onClick={() => navigate("/")}
          >
            Afromics
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
             
              <Button
                
                size="sm"
                className="hidden lg:inline-block font-body-plex bg-blue-gray-500"
                onClick={() => navigate(`${getPath("/organisations") ? "/organisations" : "/organisations"}`)}
                
              >
                <span>
                  {
                    getPath("/organisations") ? "Contact Sales" : "Organisations"
                  }
                </span>
              </Button>
              
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
        
            <Button fullWidth
                
                size="sm"
                className="hidden lg:inline-block font-body-plex bg-blue-gray-500"
                onClick={() => navigate('/organisations')}

                
              >
               
              </Button>
         
            <Link to="/researchers">
            <Button fullWidth size="sm" className="bg-white font-body-plex text-blue-gray-800">
              <span>Researchers</span>
            </Button>
            </Link>
            <Link to="/researchers">
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