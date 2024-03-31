import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom';
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import {auth } from '../firebaseConfig'
import { toast } from "react-toastify";
import Logout from "./Logout";
 


function Sidebar(props) {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const navigate = useNavigate();

  // logout function
 
 
  return (
    <React.Fragment>
      <button className="mx-8  font-logo uppercase" onClick={openDrawer}><FontAwesomeIcon className="mr-2 place-self-center mt-2" icon={props.header} size={props.size} /></button>
      <Drawer placement={props.placement} open={open} onClose={closeDrawer}>
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray" className="font-logo">
            Afromics
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        
        <List>
          
{props.items.map((item) => (
  <Link to={item.link} key={item.title}>
                 <ListItem  className="font-body-plex text-blue-gray-800">
            <ListItemPrefix>
            <FontAwesomeIcon  icon={item.icon} />
              
            </ListItemPrefix>
            
           {item.title}
           
          </ListItem>
          </Link>
))}
       {props.placement === "right" && (
          <ListItem className="font-body-plex text-blue-gray-800">
        <Logout />
          </ListItem>
        )}
        </List>
 
      </Drawer>
    </React.Fragment>
  );
}

export default  Sidebar;