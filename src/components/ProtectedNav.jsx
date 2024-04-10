import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {

  NewspaperIcon,

  RectangleGroupIcon,

  TagIcon,
 
} from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";
import { UserAuth } from "../context/authContext";
import { useLocation, useNavigate } from "react-router-dom";
 


const navListMenuItems = [
 
  {
    title: "Blog",
    description: "Write with us and share your thoughts.",
    icon: NewspaperIcon,
    link: "/blogs/new",

  },
  {
    title: "Project",
    description: "Invite other researchers to collaborate on a project",
    icon: RectangleGroupIcon,
    link: "/projects/new",
  },
  {
    title: "Datasets",
    description: "Share datasets with other researchers to collaborate",
    icon: TagIcon,
    link: "/datasets/new",
  },

];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, link }, index) => (
      <Link to={link} key={index}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    ),
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center place-self-center align-middle gap-2 py-2 pr-4 font-body-plex font-bold text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
               Contribute
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
 
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row items-center gap-6 lg:p-1">
      <Typography
        as="a"
        href="/researchers"
        variant="small"
        color="blue-gray"
        className="font-medium flex items-center gap-x-2 p-1"
      >
    
        
        <ListItem className="flex items-center hover:bg-blue-gray-100 hover:rounded-md hover:px-4 gap-2 py-2 pr-4 font-bold font-body-plex">Home</ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium hover:bg-blue-gray-100 hover:rounded-md hover:px-4"
      >
     
 
        <Link to="/datasets" className="flex items-center font-body-plex text-sm font-bold">
         Datasets
        </Link>
      </Typography>
    
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium hover:bg-blue-gray-100 hover:rounded-md hover:px-4"
      >
        
        <Link to="/projects" className="flex items-center font-body-plex font-bold">
          Projects
       </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium hover:bg-blue-gray-100 hover:rounded-md hover:px-4"
      >
       
     
        <Link to="/courses" className="flex items-center font-body-plex font-bold">
         Courses
       </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium hover:bg-blue-gray-100 hover:rounded-md hover:px-4"
      >
      
        <Link to="/blogs" className="flex items-center font-body-plex font-bold">
          Blog
       </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium hover:bg-blue-gray-100 hover:rounded-md hover:px-4"
      >
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 8.5C16 10.6217 15.1571 12.6566 13.6569 14.1569C12.1566 15.6571 10.1217 16.5 8 16.5C5.87827 16.5 3.84344 15.6571 2.34315 14.1569C0.842855 12.6566 0 10.6217 0 8.5C0 6.37827 0.842855 4.34344 2.34315 2.84315C3.84344 1.34285 5.87827 0.5 8 0.5C10.1217 0.5 12.1566 1.34285 13.6569 2.84315C15.1571 4.34344 16 6.37827 16 8.5ZM10 5.5C10 6.03043 9.78929 6.53914 9.41421 6.91421C9.03914 7.28929 8.53043 7.5 8 7.5C7.46957 7.5 6.96086 7.28929 6.58579 6.91421C6.21071 6.53914 6 6.03043 6 5.5C6 4.96957 6.21071 4.46086 6.58579 4.08579C6.96086 3.71071 7.46957 3.5 8 3.5C8.53043 3.5 9.03914 3.71071 9.41421 4.08579C9.78929 4.46086 10 4.96957 10 5.5ZM8 9.5C7.0426 9.49981 6.10528 9.77449 5.29942 10.2914C4.49356 10.8083 3.85304 11.5457 3.454 12.416C4.01668 13.0706 4.71427 13.5958 5.49894 13.9555C6.28362 14.3152 7.13681 14.5009 8 14.5C8.86319 14.5009 9.71638 14.3152 10.5011 13.9555C11.2857 13.5958 11.9833 13.0706 12.546 12.416C12.147 11.5457 11.5064 10.8083 10.7006 10.2914C9.89472 9.77449 8.9574 9.49981 8 9.5Z"
            fill="#90A4AE"
          />
        </svg>
        <Link to="/profile" className="flex items-center font-body-plex font-bold">
          Account
        </Link>
      </Typography>
    </List>
  );
}
 
function ProtectedNav() {
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

  const {logout} = UserAuth();
 
  return (
    <Navbar className="mx-auto max-w-screen-xl rounded-none bg-teal-50 font-body-plex px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 font-logo lg:ml-2"
        >
          AFROMICS
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
        <Button
                
                size="sm"
                className="hidden lg:inline-block font-body-plex bg-blue-gray-500"
                onClick={() => {navigate(`${getPath("/organisations") ? "/organisations" : "/organisations"}` ) 
               
              }}
                
              >
                <span>
                  {
                    getPath("/organisations") ? "Contact Sales" : "Organisations"
                  }
                </span>
              </Button>
          <Button     onClick={() => {logout(); setOpenNav(!openNav)}}
size="sm" color="blue-gray" className="font-body-plex font-bold">
            Log Out
          </Button>

        
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
        <Button onClick={logout} size="sm" color="blue-gray" className="font-body-plex font-bold">
            Log Out
          </Button>
         
        </div>
      </Collapse>
    </Navbar>
  );
}

export default ProtectedNav;