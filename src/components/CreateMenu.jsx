import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Avatar,
    Button,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
  } from "@material-tailwind/react";
  import { Link } from "react-router-dom";
   
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faBlog, faBriefcase, faFile, faPlus } from "@fortawesome/free-solid-svg-icons";

  export default function CreateMenu() {
    return (
     <Popover placement="top-end">
        <PopoverHandler>
          <button className="bg-blue-gray-900  mt-10 ml-4/5 font-body-plex text-white font-bold w-max px-8 py-4 shadow-xl rounded-full">
            
            CREATE</button>
        </PopoverHandler>
        <PopoverContent className="w-72">
          <List className="p-0 font-body-plex">
            <Link to="datasets/new" className="text-initial font-medium text-blue-gray-500">
              <ListItem>
                <ListItemPrefix>
                  <FontAwesomeIcon icon={faFile} />
                </ListItemPrefix>
                New Dataset
              </ListItem>
            </Link>
            <Link to="projects/new" href="#" className="text-initial font-medium text-blue-gray-500">
              <ListItem>
                <ListItemPrefix>
                  <FontAwesomeIcon icon={faBriefcase} />
                </ListItemPrefix>
                New Project
              </ListItem>
            </Link>
            <Link to="/blog/new" className="text-initial font-medium text-blue-gray-500">
              <ListItem>
                <ListItemPrefix>
                  <FontAwesomeIcon icon={faBlog} />
                </ListItemPrefix>
                Blog Post
              </ListItem>
            </Link>
          </List>
        </PopoverContent>
      </Popover>
    );
  }